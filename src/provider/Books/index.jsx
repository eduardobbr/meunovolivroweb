import { createContext, useContext, useState } from "react";

const BooksContext = createContext({});

export const BooksProvider = ({ children }) => {
  const [bookContent, setBookContent] = useState("");
  return (
    <BooksContext.Provider value={{ bookContent, setBookContent }}>
      {children}
    </BooksContext.Provider>
  );
};

export const useBooks = () => useContext(BooksContext);
