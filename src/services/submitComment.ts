import { Comment } from "@Types/posts";

const submitComment = async (comment: Comment) => {
  const result = await fetch("/api/comments", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(comment),
  });

  return result.json();
};

export default submitComment;
