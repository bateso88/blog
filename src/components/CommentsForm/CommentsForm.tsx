import { useEffect, useRef, useState } from "react";
import { submitComment } from "@Services";

type Props = {
  slug: string;
};

const CommentsForm = ({ slug }: Props) => {
  const [error, setError] = useState(false);
  const [isSuccessMessageVisible, setisSuccessMessageVisible] = useState(false);
  const commentElement = useRef<HTMLTextAreaElement>(null);
  const nameElement = useRef<HTMLInputElement>(null);
  const emailElement = useRef<HTMLInputElement>(null);
  const storeDataElement = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (nameElement.current !== null) {
      nameElement.current.value = window.localStorage.getItem("name") || "";
    }
    if (emailElement.current !== null) {
      emailElement.current.value = window.localStorage.getItem("email") || "";
    }
  }, []);

  const handleSubmitComment = () => {
    setError(false);

    const comment = commentElement?.current?.value;
    const name = nameElement?.current?.value;
    const email = emailElement?.current?.value;
    const storeData = storeDataElement?.current?.value;

    if (!comment || !name || !email) {
      setError(true);
      return;
    }
    const commentObj = { name, email, comment, slug };

    if (storeData) {
      window.localStorage.setItem("name", name);
      window.localStorage.setItem("email", email);
    } else {
      window.localStorage.removeItem("name");
      window.localStorage.removeItem("email");
    }

    submitComment(commentObj).then(() => {
      setisSuccessMessageVisible(true);
      setTimeout(() => {
        setisSuccessMessageVisible(false);
      }, 3000);
    });
  };

  return (
    <div className="bg-white shadow-lg rounded p-8 pb-12 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">Comment</h3>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <textarea
          ref={commentElement}
          className="p-4 outline-none w-full rounded focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
          placeholder="Comment"
          name="comment"
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
        <input
          type="text"
          ref={nameElement}
          className="py-2 px-4 outline-none w-full rounded focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
          placeholder="Name"
          name="name"
        />
        <input
          type="text"
          ref={emailElement}
          className="py-2 px-4 outline-none w-full rounded focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
          placeholder="Email"
          name="email"
        />
      </div>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <div>
          <input ref={storeDataElement} type="checkbox" id="storeData" name="storeData" value="true" />
          <label className="text-gray-500 cursor-pointer ml-2" htmlFor="storeData">
            Save my name and email for future comments
          </label>
        </div>
      </div>
      {error && <p className="text-xs text-red-500">All fields are required.</p>}
      <div className="mt-8">
        <button
          type="button"
          onClick={handleSubmitComment}
          className="transition duration-500 ease hover:bg-indigo-900 inline-block bg-pink-600 text-lg rounded text-white px-5 py-3 cursor-pointer"
        >
          Post Comment
        </button>
        {isSuccessMessageVisible && (
          <span className="text-xl float-right font-semibold mt-3 text-green-500">Comment submitted for review</span>
        )}
      </div>
    </div>
  );
};

export default CommentsForm;
