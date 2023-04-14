import { gql, request } from "graphql-request";

const getRecentPosts = async () => {
  const query = gql`
    query GetPostDetails() {
      posts(
        orderBy: createdAt_ASC
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

  const result: any = await request(`${process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT}`, query);

  return result.posts;
};

export default getRecentPosts;
