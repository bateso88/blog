export type PostData = {
  node: Post;
};

export type Post = {
  author: Author;
  categories: Category[];
  createdAt: string;
  excerpt: string;
  featuredImage: Image;
  slug: string;
  title: string;
};

export type PostWithContent = {
  author: Author;
  categories: Category[];
  content: { raw: RawContent };
  createdAt: string;
  excerpt: string;
  featuredImage: Image;
  slug: string;
  title: string;
};

export type SlimPost = {
  createdAt: string;
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

export type RawContent = {
  children: Child[];
};

export type Child = {
  type: string;
  children: Grandchild[];
};

export type Grandchild = {
  text: string;
  italic?: boolean;
  bold?: boolean;
  underline?: boolean;
};

export type Comment = {
  name: string;
  email: string;
  comment: string;
  createdAt?: string;
};
