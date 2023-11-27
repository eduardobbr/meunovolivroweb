import { useBooks } from "../../provider/Books";

const BookCoverUpload = () => {
  const { setCoverUp } = useBooks();

  return (
    <input
      type="file"
      name="Capa do livro"
      onChange={(e) => {
        setCoverUp(e.target.files[0]);
      }}
    ></input>
  );
};

export default BookCoverUpload;
