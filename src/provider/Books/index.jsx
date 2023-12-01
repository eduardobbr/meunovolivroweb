import { createContext, useContext, useState } from "react";
import { meuNovoLivroApi } from "../../services";
import jwtDecode from "jwt-decode";

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
  const [bookName, setBookName] = useState("");
  const [books, setBooks] = useState();
  const [coverUp, setCoverUp] = useState();
  const booksSize = ["14x21", "15x21", "16x23"];

  const getBooks = (userId) => {
    meuNovoLivroApi
      .get(`/books?user=${userId}`)
      .then((response) => setBooks(response.data))
      .catch((err) => console.log(err));

    return books;
  };

  const createBook = (book, token) => {
    meuNovoLivroApi
      .post(`/books/create/`, book, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      })
      .then(() => getBooks(jwtDecode(token).user_id))
      .catch((err) => console.log(err));
  };

  const updateBook = (book, token, oldBook) => {
    meuNovoLivroApi
      .patch(`/books/${oldBook.id}/`, book, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      })
      .then(() => getBooks(jwtDecode(token).user_id))
      .catch((err) => console.log(err));
  };

  const saveOrUpdateBooks = async (token) => {
    setBookName(`${bookTitle} - ${author}`);

    if (typeof audience === "string") {
      setAudience(0);
    }

    const divToContent = document.createElement("div");
    divToContent.innerHTML = bookContent;
    divToContent.classList.add("ql-editor");
    divToContent.classList.add("editor");

    const data = {
      name: bookName,
      content: divToContent.outerHTML,
      synopsis: sinopse,
      production: true,
      title: bookTitle,
      subtitle: bookSubTitle,
      author: author,
      isbn: isbn,
      public_target: audience,
      keywords: keywords,
      book_style: bookStyle,
    };

    const book = new FormData();

    for (let item in data) {
      book.append(item, data[item]);
    }

    if (coverUp) {
      book.append("cover", coverUp);
    }

    const has = books.filter((book) => book.name === bookName);

    has.length === 0
      ? createBook(book, token)
      : updateBook(book, token, has[0]);
  };

  const bookUpdaterGet = (bookId, token) => {
    let book = {};
    meuNovoLivroApi
      .get(`/books/${bookId}/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        book = response.data;
        setBookContent(book.content);
        setSinopse(book.synopsis);
        setBookTitle(book.title);
        setBookSubTitle(book.subtitle);
        setAuthor(book.author);
        setIsbn(book.isbn);
        setAudience(book.public_target);
        setKeywords(book.keywords);
        setBookStyle(book.book_style);
      })
      .catch((err) => console.log(err));
  };

  const bookGenerate = (id, token, name) => {
    meuNovoLivroApi
      .get(`/books/${id}/generate`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        responseType: "blob",
      })
      .then((res) => {
        const link = document.createElement("a");
        link.href = window.URL.createObjectURL(res.data);
        link.download = name;
        link.click();
      })
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
        saveOrUpdateBooks,
        bookName,
        setBookName,
        bookUpdaterGet,
        setCoverUp,
        bookGenerate,
      }}
    >
      {children}
    </BooksContext.Provider>
  );
};

export const useBooks = () => useContext(BooksContext);
