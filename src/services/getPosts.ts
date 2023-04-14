import { gql, request } from "graphql-request";

const getPosts = async () => {
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
  `;
  const result: any = await request(`${process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT}`, query);

  return result.postsConnection.edges;
};

export default getPosts;
