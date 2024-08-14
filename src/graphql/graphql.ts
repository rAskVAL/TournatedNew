import { graphql as gql } from "gql.tada";

// const graphql = initGraphQLTada<{
//   introspection: introspection;
//   scalars: {
//     DateTime: string;
//   };
// }>();

export const NewsQuery = gql(`
  query News ($page: Int = 1) {
    allNews (
      page: $page,
      limit: 8,
      sortBy: "date"
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
