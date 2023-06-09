type Props = {
  slug: string;
};

const CommentsForm = ({ slug }: Props) => {
  console.log(slug);
  return (
    <div>
      <h1>CommentsForm</h1>
    </div>
  );
};

export default CommentsForm;
