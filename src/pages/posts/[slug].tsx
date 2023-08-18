import { useRouter } from "next/router";
import { getPostDetails, getPosts } from "@Services";

import Author from "@Components/Author";
import Categories from "@Components/Categories";
import Comments from "@Components/Comments";
import CommentsForm from "@Components/CommentsForm";
import Loader from "@Components/Loader/Loader";
import PostDetail from "@Components/PostDetail.tsx";
import PostWidget from "@Components/PostWidget";
import { Category } from "@Types/posts";

type Props = {
  post: any; // for now
};
const PostDetails = ({ post }: Props) => {
  const router = useRouter();

  if (router.isFallback) {
    return <Loader />;
  }
  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="col-span-1 lg:col-span-8">
          <PostDetail post={post} />
          <Author author={post.author} />
          <CommentsForm slug={post.slug} />
          <Comments slug={post.slug} />
        </div>
        <div className="col-span-1 lg:col-span-4">
          <div className="relative lg:sticky top-8">
            <PostWidget slug={post.slug} categories={post.categories.map((category: Category) => category.slug)} />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;

export async function getStaticProps({ params }: any) {
  // HERE
  const data = await getPostDetails(params.slug);

  return {
    props: { post: data },
  };
}

export async function getStaticPaths() {
  const posts: { node: { slug: string } }[] = await getPosts();

  return {
    paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
    fallback: true,
  };
}
