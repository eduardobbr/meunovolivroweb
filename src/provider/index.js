import { BooksProvider } from "./Books";

const Provider = ({ children }) => {
  return <BooksProvider>{children}</BooksProvider>;
};

export default Provider;
