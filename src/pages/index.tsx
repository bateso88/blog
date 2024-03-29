import Head from "next/head";
import { getPosts } from "@Services";

import Categories from "@Components/Categories";
import PostCard from "@Components/PostCard";
import PostWidget from "@Components/PostWidget";
import { PostData } from "@Types/posts";

type Props = {
  posts: PostData[];
};

const Home = ({ posts }: Props) => {
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>BatesBlog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {posts.map((post: PostData) => (
            <PostCard post={post.node} key={post.node.title} />
          ))}
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const posts = (await getPosts()) || [];

  return {
    props: { posts },
  };
}

export default Home;
