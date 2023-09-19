import { Container } from "./style";

const Form = ({ transparent, onSubmit, children }) => {
  return (
    <Container $isTransparent={transparent} onSubmit={onSubmit}>
      {children}
    </Container>
  );
};

export default Form;
