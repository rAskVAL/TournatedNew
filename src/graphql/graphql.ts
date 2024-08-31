import { graphql as gql } from "gql.tada";
import { cacheExchange, createClient, fetchExchange } from "urql";
import { registerUrql } from "@urql/next/rsc";

const makeClient = () => {
  return createClient({
    url: GRAPHQL_ENDPOINT,
    exchanges: [cacheExchange, fetchExchange],
  });
};

export const { getClient } = registerUrql(makeClient);

export const GRAPHQL_ENDPOINT = "https://api.tournated.com/graphql";

export const NewsQuery = gql(`
  query News ($page: Int = 1) {
    allNews (
      page: $page,
      limit: 8,
      sortBy: "date"
      filter: {isDisplayLanding: true}
    ) {
      news {
        id
        image
        title
        postText
        date
        slug
        author {
          id
          name
          surname
          avatar          
        }
      }
    }
  }
`);

export const ArticleQuery = gql(`
    query News($slug: String!) {
        news(slug: $slug) {
            id
            title
            postText
            image
            date
            category
            author {
                id
                name
                surname
                avatar
            }
        }
    }
`);
