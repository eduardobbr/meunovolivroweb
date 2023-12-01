import Header from "../../components/Header";
import Footer from "../../components/Footer";
import DashboardBox from "../../components/DashboardBox";
import { useBooks } from "../../provider/Books";
import { useEffect } from "react";

const Dashboard = () => {
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
    setCoverUp("");
  }, []);

  return (
    <>
      <Header />
      <DashboardBox></DashboardBox>
      <Footer />
    </>
  );
};

export default Dashboard;
