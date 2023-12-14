import Header from "../../components/Header";
import Footer from "../../components/Footer";
import BookCreationDashboard from "../../components/BookCreationDashboard";
import { Navigate } from "react-router-dom";
import { useUser } from "../../provider/User";

const BookCreator = () => {
  const { logged } = useUser();

  return (
    <>
      <Header />
      {logged ? <BookCreationDashboard /> : <Navigate to={"/"} />}

      <Footer />
    </>
  );
};

export default BookCreator;
