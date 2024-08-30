import styled from "styled-components";
import {
  breakpoint,
  colors,
  typography,
} from "../../components/GlobalStyles.tsx";
import { useNavigate } from "react-router-dom";
import { ResultOf } from "gql.tada";
import { NewsQuery } from "../../graphql/graphql.ts";
import htmlToMins from "../../utils/htmlToMins.ts";
import getPrettyDate from "../../utils/getPrettyDate.ts";

const Card = ({
  article,
}: {
  article: ResultOf<typeof NewsQuery>["allNews"]["news"][number];
}) => {
  const navigate = useNavigate();
  const minutesToRead = htmlToMins(article.postText);
  return (
    <Container>
      <Picture
        onClick={() => navigate(`article?slug=${article.slug}`)}
        src={article.image ?? "/noimage.png"}
        onError={(event) => {
          event.currentTarget.src = "/noimage.png";
          event.currentTarget.onerror = null; // Set error to none
        }}
      />
      <Title onClick={() => navigate(`article?slug=${article.slug}`)}>
        {article.title}
      </Title>
      <Footer>
        <Author>
          <Avatar src={article.author?.avatar ?? "/noimage.png"} />
          <Publisher>
            <p>Written by:</p>
            <p>
              {article.author?.name} {article.author?.surname}
            </p>
          </Publisher>
        </Author>
        <Date>
          <p>{getPrettyDate(article.date as string)}</p>
          <span>・</span>
          <p>{minutesToRead}</p>
        </Date>
      </Footer>
    </Container>
  );
};

export default Card;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
`;

const Picture = styled.img`
  width: 100%;
  height: 366px;
  object-fit: cover;
  cursor: pointer;

  @media (max-width: ${breakpoint.l}px) {
    height: 264px;
  }
`;

const Title = styled.p`
  ${typography.grotesk28};
  color: ${colors.white};
  line-height: 110%; /* 30.8px */
  cursor: pointer;

  @media (max-width: ${breakpoint.l}px) {
    ${typography.grotesk24};
  }
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
`;

const Author = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Avatar = styled.img`
  height: 32px;
  width: 32px;
`;

const Publisher = styled.div`
  display: flex;
  flex-direction: column;
  & > :nth-child(1) {
    color: ${colors.grey200};
    ${typography.grotesk13}
  }

  & > :nth-child(2) {
    color: ${colors.white};
    ${typography.grotesk16};
    white-space: nowrap;
    max-width: 120px;
    overflow: hidden;
    text-overflow: ellipsis;
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
