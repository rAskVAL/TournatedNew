import SectionTitle from "../../components/SectionTitle.tsx";
import Card from "./Card.tsx";
import { ResultOf } from "gql.tada";
import { NewsQuery } from "../../graphql/graphql.ts";

const Blog = ({ data }: { data: ResultOf<typeof NewsQuery> }) => {
  return (
    <div className="flex justify-center relative w-full">
      <div className="absolute bg-grey900 w-full h-[min(605px,100%)]" />
      <main className="container mx-auto pt-12 pb-[111px] flex flex-col items-center relative md:pt-20">
        <SectionTitle text="Blog" />
        <h1 className="max-w-[686px] lg:text-grotesk64 text-white mt-6 mb-8 text-center ltext-grotesk40">
          Tournated news and featured articles from our experts
        </h1>
        {/*<SearchBar>*/}
        {/*  <SearchButton>*/}
        {/*    <SearchIcon />*/}
        {/*  </SearchButton>*/}
        {/*  <Input placeholder="Search..." />*/}
        {/*</SearchBar>*/}
        <div className="md:mt-12 grid md:grid-cols-2 gap-x-7 md:gap-y-20 max-w-[1000px] grid-cols-1 gap-y-8 mt-8">
          {data?.allNews.news.map((article) => <Card article={article} />)}
        </div>
      </main>
    </div>
  );
};

export default Blog;

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
