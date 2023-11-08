import { BooksProvider } from "./Books";
import { UserProvider } from "./User";

const Provider = ({ children }) => {
  return (
    <UserProvider>
      <BooksProvider>{children}</BooksProvider>
    </UserProvider>
  );
};

export default Provider;
