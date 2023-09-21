import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Container, Content } from "./style";
import LoginDisplay from "../../components/LoginDisplay";

const Login = () => {
  return (
    <>
      <Header />
      <Container>
        <Content>
          <LoginDisplay />
        </Content>
      </Container>
      <Footer />
    </>
  );
};

export default Login;
