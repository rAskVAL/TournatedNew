"use client";

import { useRef } from "react";
import styled from "styled-components";
import {
  breakpoint,
  colors,
  typography,
} from "../../components/GlobalStyles.tsx";
import getPrettyDate from "../../utils/getPrettyDate.ts";
import htmlToMins from "../../utils/htmlToMins.ts";
import noimage from "../../../public/noimage.png";
import Share from "../../app/[locale]/blog/article/components/Share.tsx";
import { ResultOf } from "gql.tada";
import { ArticleQuery } from "../../graphql/graphql.ts";
import TOC from "../../app/[locale]/blog/article/components/TOC.tsx";

const Article = ({ data }: { data: ResultOf<typeof ArticleQuery> }) => {
  const contentRef = useRef<HTMLDivElement | null>(null);

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

  return (
    <Container>
      <Header>
        <Title>{title}</Title>
        <Details>
          <AuthorBox>
            <Avatar
              src={author?.avatar ?? noimage.src}
              onError={(event) => {
                event.currentTarget.src = noimage.src;
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
        src={image ?? noimage.src}
        onError={(event) => {
          event.currentTarget.src = noimage.src;
          event.currentTarget.onerror = null; // Set error to none
        }}
      />
      {cleanedPostText && (
        <ArticleWrapper ref={contentRef}>
          <article
            className="article"
            dangerouslySetInnerHTML={{ __html: cleanedPostText }}
          />
          <TOC />
        </ArticleWrapper>
      )}
      <Share />
    </Container>
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

const ArticleWrapper = styled.div`
  padding-inline: 20px;
  display: flex;
  justify-content: center;
  max-width: 1200px;
  width: 100%;
  position: relative;
`;
