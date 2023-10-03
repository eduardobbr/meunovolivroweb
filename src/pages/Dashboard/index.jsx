import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SizeChooser from "../../components/SizeChooser";
import TextEditor from "../../components/TextEditor";
import FontChooser from "../../components/FontChooser";
import DataChooser from "../../components/DataChooser";
import CoverGenerator from "../../components/CoverGenerator";

const Dashboard = () => {
  return (
    <>
      <Header />
      <SizeChooser />
      <FontChooser />
      <TextEditor />
      <DataChooser />
      <CoverGenerator />
      <Footer />
    </>
  );
};

export default Dashboard;
