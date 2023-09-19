import { Container, InputContainer } from "./style";

const Input = ({ label, register, name, error, required, ...rest }) => {
  return (
    <Container $required={required}>
      <p>{label}</p>
      <InputContainer $error={!!error}>
        <input {...rest} required={required} {...register(name)} />
      </InputContainer>
      <div>{!!error && <span>{error}</span>}</div>
    </Container>
  );
};

export default Input;
