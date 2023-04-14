import { gql, request } from "graphql-request";

import { Category } from "@Types/posts";

export const getSimilarPosts = async (categories: Category[], slug: string) => {
  const query = gql`
    query GetPostDetails($slug: String!, $categories: [String!]) {
      posts(where: { slug_not: $slug, AND: { categories_some: { slug_in: $categories } } }, last: 3) {
        title
        featuredImage {
          url
        }
        createdAt
        slug
      }
    }
  `;

  const result: any = await request(`${process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT}`, query, { categories, slug });

  return result.posts;
};

export default getSimilarPosts;
