import { createContext, useContext, useState } from "react";

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
  const booksSize = ["14x21", "15x21", "16x23"];

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
      }}
    >
      {children}
    </BooksContext.Provider>
  );
};

export const useBooks = () => useContext(BooksContext);
