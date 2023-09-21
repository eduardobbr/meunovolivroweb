import Form from "../Form";
import Input from "../Input";
import Button from "../Button";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Container } from "./style";

const LoginDisplay = () => {
  const schema = yup.object({
    email: yup.string().email("Email Inválido").required("Campo Obrigatório!"),
    password: yup.string().required("Campo Obrigatório!"),
  });

  const schemaRegister = yup.object({
    username: yup.string().required("Campo Obrigatório!"),
    email: yup.string().email("Email Inválido").required("Campo Obrigatório!"),
    password: yup.string().required("Campo Obrigatório!"),
  });

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ resolver: yupResolver(schema) });

  const registerUseForm = useForm({ resolver: yupResolver(schemaRegister) });

  const submit = (data) => {
    console.log(data);
  };

  return (
    <Container>
      <div>
        <div>Entrar</div>
        <Form transparent onSubmit={handleSubmit(submit)}>
          <Input
            label="Email"
            register={register}
            name={"email"}
            error={errors.email?.message}
            placeholder="Email"
            required
          />
          <Input
            label="Senha"
            register={register}
            name={"password"}
            error={errors.password?.message}
            placeholder="senha"
            type="password"
            required
          />
          <Button type="submit">Acessar</Button>
        </Form>
      </div>
      <div>
        <div>Cadastre-se</div>
        <Form transparent onSubmit={registerUseForm.handleSubmit(submit)}>
          <Input
            label="Nome de Usuário"
            register={registerUseForm.register}
            name={"username"}
            error={registerUseForm.formState.errors?.username?.message}
            placeholder="Nome de Usuário"
            required
          />
          <Input
            label="Email"
            register={registerUseForm.register}
            name={"email"}
            error={registerUseForm.formState.errors?.email?.message}
            placeholder="Email"
            required
          />
          <Input
            label="Senha"
            register={registerUseForm.register}
            name={"password"}
            error={registerUseForm.formState.errors?.password?.message}
            placeholder="senha"
            type="password"
            required
          />
          <Button type="submit">Cadastre-se</Button>
        </Form>
      </div>
    </Container>
  );
};

export default LoginDisplay;
