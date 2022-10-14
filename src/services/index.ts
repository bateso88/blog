import { graphql } from "graphql"
import { request, gql } from "graphql-request"

// const graphqlAPI: string = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT

export const getPosts = async () => {
  const query = gql`
    query MyQuery {
      postsConnection {
        edges {
          node {
            author {
              bio
              name
              id
              photo {
                url
              }
            }
            createdAt
            slug
            title
            excerpt
            featuredImage {
              url
            }
            categories {
              name
              slug
            }
          }
        }
      }
    }
  `
const result = await request(process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT, query)

return result.postsConnection.edges;
}