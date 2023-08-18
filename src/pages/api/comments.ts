// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { gql, GraphQLClient } from "graphql-request";

type Data = {
  createComment: {
    id: string;
  };
};

export default async function comments(req: NextApiRequest, res: NextApiResponse<Data>) {
  const graphqlClient = new GraphQLClient(`${process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT}`, {
    headers: {
      authorization: `Bearer ${process.env.NEXT_PUBLIC_GRAPHCMS_TOKEN}`,
    },
  });

  const query = gql`
    mutation CreateComment($name: String!, $email: String!, $comment: String!, $slug: String!) {
      createComment(data: { name: $name, email: $email, comment: $comment, post: { connect: { slug: $slug } } }) {
        id
      }
    }
  `;
  try {
    const result: { createComment: { id: string } } = await graphqlClient.request(query, req.body);
    return res.status(200).send(result);
  } catch (error: any) {
    return res.status(500).send(error);
  }
}
