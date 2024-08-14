import SectionTitle from "../../components/SectionTitle.tsx";
import styled from "styled-components";
import {
  breakpoint,
  colors,
  containerStyles,
  typography,
} from "../../components/GlobalStyles.tsx";

// import SearchIcon from "./assets/searchIcon.svg?react";
import Card from "./Card.tsx";
import { useQuery } from "urql";
import { NewsQuery } from "../../graphql/graphql.ts";
import { Helmet } from "react-helmet";

const Blog = () => {
  const [{ data }] = useQuery({ query: NewsQuery });

  return (
    <>
      <Helmet>
        <title>
          Tournated Blog | Latest News, In-Depth Articles, and Feature Updates
        </title>
        <meta
          name="description"
          content="Stay updated with Tournated Blog! Explore our latest news, insightful articles, and comprehensive feature updates. Dive into the world of sports innovation, trends, and expert insights today."
        />
      </Helmet>
      <OuterContainer>
        <LightBackground />
        <Container>
          <SectionTitle text="Blog" />
          <Headline>
            Tournated news and featured articles from our experts
          </Headline>
          {/*<SearchBar>*/}
          {/*  <SearchButton>*/}
          {/*    <SearchIcon />*/}
          {/*  </SearchButton>*/}
          {/*  <Input placeholder="Search..." />*/}
          {/*</SearchBar>*/}
          <CardsGrid>
            {data?.allNews.news.map((article) => <Card article={article} />)}
          </CardsGrid>
        </Container>
      </OuterContainer>
    </>
  );
};

export default Blog;

const Container = styled.main`
  ${containerStyles};
  padding-top: 80px;
  padding-bottom: 111px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  @media (max-width: ${breakpoint.l}px) {
    padding-top: 48px;
  }
`;

const Headline = styled.h1`
  max-width: 686px;
  ${typography.grotesk64};
  color: ${colors.white};
  margin-top: 24px;
  margin-bottom: 32px;
  text-align: center;

  @media (max-width: ${breakpoint.l}px) {
    ${typography.grotesk40}
  }
`;

// const SearchBar = styled.div`
//   display: flex;
//   height: 48px;
// `;
//
// const SearchButton = styled.button`
//   ${resetStyles};
//   && {
//     background: ${colors.secondary};
//     height: 100%;
//     aspect-ratio: 1/1;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     cursor: pointer;
//
//     &:hover {
//       opacity: 0.7;
//     }
//   }
// `;
//
// const Input = styled.input`
//   ${resetStyles};
//   && {
//     background: ${colors.grey800};
//     width: 267px;
//     color: ${colors.white};
//     padding-inline: 16px;
//     padding-block: 14px;
//     &::placeholder {
//       color: ${colors.secondary};
//     }
//   }
// `;

const LightBackground = styled.div`
  position: absolute;
  background: ${colors.grey900};
  width: 100%;
  height: min(605px, 100%);
`;

const OuterContainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  width: 100%;
`;

const CardsGrid = styled.div`
  margin-top: 48px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 28px;
  row-gap: 80px;
  max-width: 1000px;

  @media (max-width: ${breakpoint.l}px) {
    grid-template-columns: 1fr;
    row-gap: 32px;
    margin-top: 32px;
  }
`;
