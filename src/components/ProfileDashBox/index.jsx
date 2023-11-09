import { useEffect } from "react";
import { useUser } from "../../provider/User";
import { Container, Content, Title } from "./style";
import jwtDecode from "jwt-decode";
import { useBooks } from "../../provider/Books";

const ProfileDashBox = () => {
  const { user, setUser, token } = useUser();
  const { books } = useBooks();

  useEffect(() => {
    setUser(jwtDecode(token));
  }, [setUser, token]);

  return (
    <Container>
      <Content>
        <Title>{user.username}</Title>
        {books && <p>{books.length} Livro(s)</p>}
      </Content>
    </Container>
  );
};

export default ProfileDashBox;
