import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Input from "../../components/Input";
import { Container, Content } from "./style";

const Login = () => {
  return (
    <>
      <Header />
      <Container>
        <Content>
          <Input
            label="test"
            name="test"
            placeholder="test"
            register={() => console.log()}
            required={true}
          ></Input>
        </Content>
      </Container>
      <Footer />
    </>
  );
};

export default Login;
