import { createContext, useContext, useState } from "react";

const BooksContext = createContext({});

export const BooksProvider = ({ children }) => {
  const [bookContent, setBookContent] = useState("");
  const [bookSize, setBookSize] = useState("");
  const [bookStyle, setBookStyle] = useState("");
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
      }}
    >
      {children}
    </BooksContext.Provider>
  );
};

export const useBooks = () => useContext(BooksContext);
