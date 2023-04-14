import { gql, request } from "graphql-request";

const getCategories = async () => {
  const query = gql`
    query GetCategories {
      categories {
        name
        slug
      }
    }
  `;

  const result: any = await request(`${process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT}`, query);

  return result.categories;
};

export default getCategories;
