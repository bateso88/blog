export type Post = {
  node: PostData;
};

export type PostData = {
  author: Author;
  categories: Category[];
  createdAt: string;
  excerpt: string;
  featuredImage: Image;
  slug: string;
  title: string;
};

export type Author = {
  bio: string;
  id: string;
  name: string;
  photo: Image;
};

export type Category = {
  name: string;
  slug: string;
};

export type Image = {
  url: string;
};
