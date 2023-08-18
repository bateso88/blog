import { useEffect, useState } from "react";
import { getComments } from "@Services";
import parse from "html-react-parser";
import moment from "moment";

import { Comment } from "@Types/posts";
type Props = {
  slug: string;
};

const Comments = ({ slug }: Props) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getComments(slug).then((result) => setComments(result));
  }, [slug]);

  return (
    <>
      {comments.length > 0 && (
        <div className="bg-white shadow-lg rounded p-8 pb-12 mb-8">
          <h3 className="test-xl mb-8 font-semibold border-b pb-4">{comments.length} Comments</h3>
          {comments.map((comment: Comment) => (
            <div key={comment.createdAt} className="border-b border-gray-100 mb-4 pb-4">
              <p className="mb-4">
                <span className="font-semibold">{comment.name}</span>
                {" - "}
                {moment(comment.createdAt).format("DD MMM YYYY, HH:mm")}
              </p>
              <p className="whitespace-pre-line text-gray-600 w-full">{parse(comment.comment)}</p>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Comments;
