import React from "react";

import { getPosts, getPostDetails } from "@Services";
import {
  PostDetail,
  CategorySection,
  PostWidget,
  Author,
  Comments,
  CommentsFrom,
} from "@Components";
const PostDetails = () => {
  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="col-span-1 lg:col-span-8"></div>
        <div className="col-span-1 lg:col-span-4"></div>
      </div>
    </div>
  );
};

export default PostDetails;
