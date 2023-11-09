import BooksDashBox from "../BooksDashBox";
import ProfileDashBox from "../ProfileDashBox";
import { Container, Content } from "./style";

const DashboardBox = () => {
  return (
    <Container>
      <Content>
        <ProfileDashBox />
        <BooksDashBox />
      </Content>
    </Container>
  );
};

export default DashboardBox;
