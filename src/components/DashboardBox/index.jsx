import { useUser } from "../../provider/User";
import BooksDashBox from "../BooksDashBox";
import ProfileDashBox from "../ProfileDashBox";
import { Container, Content } from "./style";

const DashboardBox = () => {
  const { user } = useUser();

  return (
    <Container>
      <Content>
        <ProfileDashBox />
        {user && <BooksDashBox />}
      </Content>
    </Container>
  );
};

export default DashboardBox;
