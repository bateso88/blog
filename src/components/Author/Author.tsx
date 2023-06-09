import Image from "next/image";

import { Author as AuthorType } from "@Types/posts";

type Props = {
  author: AuthorType;
};

const Author = ({ author }: Props) => {
  return (
    <div className="mb-8 relative rounded-lg bg-black bg-opacity-20">
      <div className="flex flex-row">
        <Image
          alt={author.name}
          unoptimized
          height="80"
          width="180"
          className="align-middle rounded"
          src={author.photo.url}
        />
        <div className="m-auto text-center">
          <h3 className="text-white text-xl font-bold">{author.name}</h3>
          <p className="text-white text-lg">{author.bio}</p>
        </div>
      </div>
    </div>
  );
};

export default Author;
