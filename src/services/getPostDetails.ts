import { gql, request } from "graphql-request";

const getPostDetails = async (slug: string) => {
  const query = gql`
    query GetPostDetails($slug: String!) {
      post(where: { slug: $slug }) {
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
        content {
          raw
        }
      }
    }
  `;
  const result: any = await request(`${process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT}`, query, { slug });

  return result.post;
};

export default getPostDetails;
