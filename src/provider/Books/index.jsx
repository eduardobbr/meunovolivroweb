import { createContext, useContext, useState } from "react";
import { meuNovoLivroApi } from "../../services";

const BooksContext = createContext({});

export const BooksProvider = ({ children }) => {
  const [bookContent, setBookContent] = useState("");
  const [bookSize, setBookSize] = useState("");
  const [bookStyle, setBookStyle] = useState("");
  const [bookTitle, setBookTitle] = useState("");
  const [bookSubTitle, setBookSubTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [isbn, setIsbn] = useState("");
  const [audience, setAudience] = useState("");
  const [keywords, setKeywords] = useState("");
  const [sinopse, setSinopse] = useState("");
  const [bookCover, setBookCover] = useState();
  const [books, setBooks] = useState();
  const booksSize = ["14x21", "15x21", "16x23"];

  const getBooks = (userId) => {
    meuNovoLivroApi
      .get(`/books?user=${userId}`)
      .then((response) => setBooks(response.data))
      .catch((err) => console.log(err));
  };

  return (
    <BooksContext.Provider
      value={{
        bookContent,
        setBookContent,
        booksSize,
        bookSize,
        setBookSize,
        bookStyle,
        setBookStyle,
        bookTitle,
        setBookTitle,
        bookSubTitle,
        setBookSubTitle,
        author,
        setAuthor,
        isbn,
        setIsbn,
        audience,
        setAudience,
        keywords,
        setKeywords,
        sinopse,
        setSinopse,
        bookCover,
        setBookCover,
        getBooks,
        books,
      }}
    >
      {children}
    </BooksContext.Provider>
  );
};

export const useBooks = () => useContext(BooksContext);
