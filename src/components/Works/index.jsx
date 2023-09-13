import {
  Box,
  Container,
  Content,
  Icon,
  Paragraph,
  SectionTitle,
  SubTitle,
} from "./style";

import {
  PiLightbulbFilament,
  PiLightning,
  PiNotebook,
  PiTruck,
} from "react-icons/pi";

const Works = () => {
  return (
    <Container>
      <SectionTitle>Escreva! O resto é com a gente</SectionTitle>

      <Content>
        <Box>
          <Icon>
            <PiLightbulbFilament />
          </Icon>
          <SubTitle>Revisão</SubTitle>
          <Paragraph>
            Chaos selfish decieve prejudice joy snare self of passion hatred
            deceptions.
          </Paragraph>
        </Box>

        <Box>
          <Icon $primary="true">
            <PiLightning />
          </Icon>
          <SubTitle>Design</SubTitle>
          <Paragraph>
            Chaos selfish decieve prejudice joy snare self of passion hatred
            deceptions.
          </Paragraph>
        </Box>

        <Box>
          <Icon>
            <PiNotebook />
          </Icon>
          <SubTitle>Impressão</SubTitle>
          <Paragraph>
            Chaos selfish decieve prejudice joy snare self of passion hatred
            deceptions.
          </Paragraph>
        </Box>

        <Box>
          <Icon $primary="true">
            <PiTruck />
          </Icon>
          <SubTitle>Distribuição</SubTitle>
          <Paragraph>
            Chaos selfish decieve prejudice joy snare self of passion hatred
            deceptions.
          </Paragraph>
        </Box>
      </Content>
    </Container>
  );
};

export default Works;
