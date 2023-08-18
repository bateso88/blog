type Props = {
  slug: string;
};

const Comments = ({ slug }: Props) => {
  console.log(slug);
  return (
    <div>
      <h1>Comments</h1>
    </div>
  );
};

export default Comments;
