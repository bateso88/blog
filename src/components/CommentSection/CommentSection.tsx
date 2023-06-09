type Props = {
  slug: string;
};

const CommentsSection = ({ slug }: Props) => {
  console.log(slug);
  return (
    <div>
      <h1>CommentsSection</h1>
    </div>
  );
};

export default CommentsSection;
