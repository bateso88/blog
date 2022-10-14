import { request, gql } from "graphql-request";

export const getSimilarPosts = async () => {
  const query = gql`
    query GetPostDetails($slug: String!, $categories: [String!]) {
      posts(
        where: {
          slug_not: $slug
          AND: { categories_some: { slug_in: $categories } }
        }
        last: 3
      ) {
        title
        featuredImage {
          url
        }
        createdAt
        slug
      }
    }
  `;

  const result = await request(
    `${process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT}`,
    query
  );

  return result.posts;
};

export default getSimilarPosts;
