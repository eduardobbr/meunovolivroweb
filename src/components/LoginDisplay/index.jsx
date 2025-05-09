import Form from "../Form";
import Input from "../Input";
import Button from "../Button";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Container } from "./style";
import { useUser } from "../../provider/User";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LoginDisplay = () => {
  const { login, createUser, logged, loginVerify, errorLogin, errorSignup } =
    useUser();
  const navigate = useNavigate();

  useEffect(() => {
    loginVerify();
    if (logged) {
      navigate("/dashboard");
    }
  }, [logged, navigate, loginVerify]);

  const schema = yup.object({
    username: yup.string().required("Campo Obrigatório!"),
    password: yup.string().required("Campo Obrigatório!"),
  });

  const schemaRegister = yup.object({
    username: yup.string().required("Campo Obrigatório!"),
    email: yup.string().email("Email Inválido").required("Campo Obrigatório!"),
    password: yup.string().required("Campo Obrigatório!"),
    passwordConfirm: yup
      .string()
      .required("Campo Obrigatório!")
      .oneOf([yup.ref("password"), null], "As senhas não combinam!"),
  });

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ resolver: yupResolver(schema) });

  const registerUseForm = useForm({ resolver: yupResolver(schemaRegister) });

  const submit = (data) => {
    login(data.username, data.password);
  };

  const submitSignup = (data) => {
    createUser(data.email, data.username, data.password, data.passwordConfirm);
  };

  return (
    <Container>
      <div>
        <div>Entrar</div>
        <Form transparent onSubmit={handleSubmit(submit)}>
          <Input
            label="Nome de Usuário"
            register={register}
            name={"username"}
            error={errors.username?.message}
            placeholder="Nome de Usuário"
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
          {errorLogin && <span>Senha e/ou ususário incorretos</span>}
          <Button type="submit">Acessar</Button>
        </Form>
      </div>
      <div>
        <div>Cadastre-se</div>
        <Form transparent onSubmit={registerUseForm.handleSubmit(submitSignup)}>
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
            placeholder="Senha"
            type="password"
            required
          />
          <Input
            label="Confirme a Senha"
            register={registerUseForm.register}
            name={"passwordConfirm"}
            error={registerUseForm.formState.errors?.passwordConfirm?.message}
            placeholder="Senha"
            type="password"
            required
          />
          {errorSignup && <span>Algo deu errado, Tente novamente.</span>}
          <Button type="submit">Cadastre-se</Button>
        </Form>
      </div>
    </Container>
  );
};

export default LoginDisplay;
