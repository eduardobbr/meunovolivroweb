import { useEffect } from "react";
import { useUser } from "../../provider/User";
import { Container, Content, Title } from "./style";

const ProfileDashBox = () => {
  const { userSetter, user } = useUser();

  useEffect(() => {
    userSetter();
  });

  return (
    <Container>
      <Title>Perfil:</Title>
      <Content>
        <h3>{user.username}</h3>
        <p>{user.email}</p>
        <p>X Livros</p>
      </Content>
    </Container>
  );
};

export default ProfileDashBox;
