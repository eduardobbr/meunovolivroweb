import { useEffect } from "react";
import { useUser } from "../../provider/User";
import { Container, Content, Title } from "./style";
import jwtDecode from "jwt-decode";

const ProfileDashBox = () => {
  const { user, setUser, token } = useUser();

  useEffect(() => {
    setUser(jwtDecode(token));
  }, [setUser, token]);

  return (
    <Container>
      <Content>
        <Title>{user.username}</Title>
        <p>X Livros</p>
      </Content>
    </Container>
  );
};

export default ProfileDashBox;
