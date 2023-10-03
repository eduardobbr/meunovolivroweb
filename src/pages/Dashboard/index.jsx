import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SizeChooser from "../../components/SizeChooser";
import TextEditor from "../../components/TextEditor";
import FontChooser from "../../components/FontChooser";

const Dashboard = () => {
  return (
    <>
      <Header />
      <SizeChooser />
      <FontChooser />
      <TextEditor />
      <Footer />
    </>
  );
};

export default Dashboard;
