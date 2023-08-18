import { useRouter } from "next/router";
import { getCategories, getCategoryPosts } from "@Services";

// import { Categories, Loader, PostCard } from "@Components";
import Categories from "@Components/Categories";
import Loader from "@Components/Loader/Loader";
import PostCard from "@Components/PostCard";
import { Category, PostData } from "@Types/posts";

type Props = {
  posts: PostData[];
};

const CategoryPost = ({ posts }: Props) => {
  const router = useRouter();

  if (router.isFallback) {
    return <Loader />;
  }

  return (
    <>
      <div className="container mx-auto px-10 mb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="col-span-1 lg:col-span-8">
            {posts.length === 0 && <div className="font-bold text-2xl text-white">No posts found</div>}
            {posts.map((post, index) => (
              <PostCard key={index} post={post.node} />
            ))}
          </div>
          <div className="col-span-1 lg:col-span-4">
            <div className="relative lg:sticky top-2">
              <Categories />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CategoryPost;

export async function getStaticProps({ params }: any) {
  // TYPE HERE
  const posts = await getCategoryPosts(params.slug);

  return {
    props: { posts },
  };
}

export async function getStaticPaths() {
  const categories = await getCategories();
  return {
    paths: categories.map(({ slug }: Category) => ({ params: { slug } })),
    fallback: true,
  };
}
