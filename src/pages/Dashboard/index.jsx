import Header from "../../components/Header";
import Footer from "../../components/Footer";
import DashboardBox from "../../components/DashboardBox";
import { useBooks } from "../../provider/Books";
import { useEffect } from "react";
import { Navigate, redirect } from "react-router-dom";
import { useUser } from "../../provider/User";

const Dashboard = () => {
  const { logged } = useUser();

  const {
    setBookContent,
    setBookSize,
    setBookStyle,
    setBookTitle,
    setBookSubTitle,
    setAuthor,
    setIsbn,
    setAudience,
    setKeywords,
    setSinopse,
    setBookName,
    setCoverUp,
  } = useBooks();

  useEffect(() => {
    setBookContent("");
    setBookSize("");
    setBookStyle("");
    setBookTitle("");
    setBookSubTitle("");
    setAuthor("");
    setIsbn("");
    setAudience("");
    setKeywords("");
    setSinopse("");
    setBookName("");
    setCoverUp(null);
  }, []);

  return (
    <>
      <Header />
      {logged ? <DashboardBox></DashboardBox> : <Navigate to={"/"} />}
      <Footer />
    </>
  );
};

export default Dashboard;
