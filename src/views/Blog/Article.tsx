import { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import {
  breakpoint,
  colors,
  typography,
} from "../../components/GlobalStyles.tsx";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TelegramShareButton,
} from "react-share";
import { useQuery } from "urql";
import { ArticleQuery } from "../../graphql/graphql.ts";
import { useSearchParams } from "react-router-dom";
import getPrettyDate from "../../utils/getPrettyDate.ts";
import htmlToMins from "../../utils/htmlToMins.ts";
import { Helmet } from "react-helmet";

type Heading = {
  text: string;
  element: HTMLElement;
};

const Article = () => {
  const [searchQuery] = useSearchParams();
  const slug = searchQuery.get("slug") ?? "";
  const [{ data }] = useQuery({
    query: ArticleQuery,
    variables: { slug },
  });
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeHeading, setActiveHeading] = useState<string | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [tocDistance, setTocDistance] = useState<number>(0);

  useEffect(() => {
    const articleText = document.querySelector("article");
    if (articleText) {
      const h1Elements = articleText.querySelectorAll("h1");
      const h2Elements = articleText.querySelectorAll("h2");
      const allHeadings: Heading[] = [];

      h1Elements.forEach((h1) =>
        allHeadings.push({ text: h1.textContent?.trim() || "", element: h1 }),
      );
      h2Elements.forEach((h2) =>
        allHeadings.push({ text: h2.textContent?.trim() || "", element: h2 }),
      );

      setHeadings(allHeadings);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (contentRef.current) {
        const distance = contentRef.current.getBoundingClientRect().top;
        setTocDistance(distance);
      }

      const middleOfViewport = window.innerHeight / 2;

      const closestHeading = headings.reduce<Heading | null>(
        (closest, heading) => {
          const headingRect = heading.element.getBoundingClientRect();
          const headingMiddle = headingRect.top + headingRect.height / 2;
          const distanceFromMiddle = Math.abs(headingMiddle - middleOfViewport);

          if (
            closest === null ||
            distanceFromMiddle <
              Math.abs(
                closest.element.getBoundingClientRect().top +
                  closest.element.getBoundingClientRect().height / 2 -
                  middleOfViewport,
              )
          ) {
            return heading;
          }

          return closest;
        },
        null,
      );

      if (closestHeading) {
        setActiveHeading(closestHeading.text);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Initial calculation
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [headings]);

  if (!data) return;

  const { date, title, postText, image, author } = data.news;

  const removeInlineStyles = (html: string | null) => {
    if (!html) return undefined;
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");
    const elements = doc.body.querySelectorAll("*");

    elements.forEach((element) => {
      element.removeAttribute("style");
    });

    return doc.body.innerHTML;
  };

  const cleanedPostText = removeInlineStyles(postText);

  const metaDescription = postText
    ? postText.replace(/<[^>]*>/g, "").slice(0, 157) + "..."
    : undefined;

  return (
    cleanedPostText && (
      <>
        <Helmet>
          {title && <title>{title}</title>}
          {metaDescription && (
            <meta name="description" content={metaDescription} />
          )}
        </Helmet>
        <Container>
          <Header>
            <Title>{title}</Title>
            <Details>
              <AuthorBox>
                <Avatar
                  src={author?.avatar ?? "/noimage.png"}
                  onError={(event) => {
                    event.currentTarget.src = "/noimage.png";
                    event.currentTarget.onerror = null; // Set error to none
                  }}
                  alt="Author"
                />
                <Author>
                  <p>Written by:</p>
                  <p>
                    {author?.name} {author?.surname}
                  </p>
                </Author>
              </AuthorBox>
              <Date>
                <p>{getPrettyDate(date as string)}</p>
                <span>・</span>
                <p>{htmlToMins(postText)}</p>
              </Date>
            </Details>
          </Header>
          <Image
            src={image ?? "/noimage.png"}
            onError={(event) => {
              event.currentTarget.src = "/noimage.png";
              event.currentTarget.onerror = null; // Set error to none
            }}
          />

          <ArticleWrapper ref={contentRef}>
            <ArticleText
              dangerouslySetInnerHTML={{ __html: cleanedPostText }}
            />
            {headings.length > 0 && (
              <TableOfContents
                $top={tocDistance > 0 ? 0 : tocDistance * -1 + 20}
              >
                <h6>Table of content</h6>
                <ul>
                  {headings.map(({ text, element }) => (
                    <li
                      key={text}
                      onClick={() =>
                        element.scrollIntoView({
                          behavior: "smooth",
                          block: "center",
                        })
                      }
                      className={activeHeading === text ? "active" : ""}
                    >
                      {text}
                    </li>
                  ))}
                </ul>
              </TableOfContents>
            )}
          </ArticleWrapper>
          <Share>
            <p>Share Article:</p>
            <ShareIconsWrapper>
              <TelegramShareButton url={window.location.href}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="icon icon-tabler icons-tabler-outline icon-tabler-brand-telegram"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4" />
                </svg>
              </TelegramShareButton>
              <FacebookShareButton url={window.location.href}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="icon icon-tabler icons-tabler-outline icon-tabler-brand-facebook"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
                </svg>
              </FacebookShareButton>
              <LinkedinShareButton url={window.location.href}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="icon icon-tabler icons-tabler-outline icon-tabler-brand-linkedin"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
                  <path d="M8 11l0 5" />
                  <path d="M8 8l0 .01" />
                  <path d="M12 16l0 -5" />
                  <path d="M16 16v-3a2 2 0 0 0 -4 0" />
                </svg>
              </LinkedinShareButton>
            </ShareIconsWrapper>
          </Share>
        </Container>
      </>
    )
  );
};

export default Article;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
`;

const Header = styled.div`
  padding-inline: 20px;
  margin-top: 56px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-width: 780px;

  @media (max-width: ${breakpoint.l}px) {
    margin-top: 32px;
  }
`;

const Title = styled.h1`
  ${typography.grotesk48};
  color: ${colors.white};

  @media (max-width: ${breakpoint.l}px) {
    ${typography.grotesk40};
  }
`;

const Details = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: end;
`;

const AuthorBox = styled.div`
  display: flex;
  gap: 8px;
`;

const Avatar = styled.img`
  height: 32px;
  width: 32px;
  object-fit: cover;
  object-position: top;
`;

const Author = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  :nth-child(1) {
    color: ${colors.grey300};
    ${typography.grotesk13}
  }
  :nth-child(2) {
    color: ${colors.white};
  }
`;

const Date = styled.div`
  display: flex;
  gap: 12px;
  color: ${colors.white};
  ${typography.grotesk14};

  @media (max-width: ${breakpoint.l}px) {
    flex-direction: column;
    gap: 2px;
    span {
      display: none;
    }
  }
`;

const Image = styled.img`
  max-width: 980px;
  height: 501px;
  width: 100%;
  object-fit: cover;

  @media (max-width: ${breakpoint.l}px) {
    width: 100%;
    height: 260px;
  }
`;

const Share = styled.div`
  padding-inline: 20px;
  max-width: 580px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
  color: ${colors.white};
`;

const ArticleText = styled.article`
  && {
    color: #b9b9b9;
    max-width: 580px;

    h1 {
      ${typography.grotesk24};
      color: ${colors.white};
      margin-bottom: 32px;
    }

    h2 {
      ${typography.grotesk20};
      color: ${colors.white};
      margin-bottom: 32px;
    }

    h3 {
      ${typography.grotesk18};
      color: ${colors.white};
      margin-bottom: 32px;
    }

    h4 {
      ${typography.grotesk16};
      color: ${colors.white};
      margin-bottom: 32px;
    }

    h5 {
      ${typography.grotesk14};
      color: ${colors.white};
      margin-bottom: 32px;
    }

    h6 {
      ${typography.grotesk13};
      color: ${colors.white};
      margin-bottom: 32px;
    }

    p {
      ${typography.grotesk18};
      margin-bottom: 48px;
      @media (max-width: ${breakpoint.l}px) {
        ${typography.grotesk16};
        margin-bottom: 40px;
      }
    }

    ul {
      list-style-type: disc;
      padding-left: 20px;
      margin-bottom: 16px;

      li {
        ${typography.grotesk16};
        margin-bottom: 8px;
      }
    }

    ol {
      list-style-type: decimal;
      padding-left: 20px;
      margin-bottom: 16px;

      li {
        ${typography.grotesk16};
        margin-bottom: 8px;
      }
    }

    blockquote {
      ${typography.grotesk16};
      color: ${colors.grey700};
      border-left: 4px solid ${colors.grey300};
      padding-left: 16px;
      margin-bottom: 16px;
    }

    code {
      background-color: ${colors.grey100};
      padding: 2px 4px;
      color: ${colors.white};
    }

    table {
      width: 100%;
      border-collapse: collapse;
      margin-bottom: 24px;

      th,
      td {
        border: 1px solid #333;
        padding: 8px;
        text-align: left;
      }

      th {
        background-color: #333;
        ${typography.grotesk14};
        color: ${colors.white};
      }

      td {
        ${typography.grotesk14};
        color: #b9b9b9;
      }
    }

    img {
      max-width: 100%;
      height: auto;
      margin-bottom: 24px;
    }

    a {
      color: ${colors.primary};
      text-decoration: none;

      &:hover {
        text-decoration: none;
        color: ${colors.primaryHover};
      }
    }

    hr {
      border: 0;
      border-top: 1px solid ${colors.grey300};
      margin: 24px 0;
    }
  }
`;

const TableOfContents = styled.div<{ $top: number }>`
  position: absolute;
  top: ${({ $top }) => $top}px;
  left: 0;
  width: 280px;
  height: fit-content;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  background: ${colors.secondary};
  color: ${colors.grey500};
  ${typography.grotesk14};

  h6 {
    color: ${colors.grey400};
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 2px;
    list-style-type: disc;
    list-style-position: inside;
  }

  li {
    cursor: pointer;
  }

  li:hover {
    color: ${colors.grey200};
  }

  .active {
    font-weight: bold;
    color: ${colors.white};
  }

  transition: all 0.4s;

  @media (max-width: ${breakpoint.l}px) {
    display: none;
  }
`;

const ArticleWrapper = styled.div`
  padding-inline: 20px;
  display: flex;
  justify-content: center;
  max-width: 1200px;
  width: 100%;
  position: relative;
`;

const ShareIconsWrapper = styled.div`
  display: flex;
  gap: 8px;
`;
