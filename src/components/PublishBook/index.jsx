import { useBooks } from "../../provider/Books";

const PublishBook = () => {
  const {} = useBooks();
  return <section>Publish</section>;
};

export default PublishBook;
