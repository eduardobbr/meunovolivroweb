import { useState } from "react";
import Shape from "../Shape";
import {
  Author,
  BookTitle,
  Button,
  ConfigBox,
  ConfigFields,
  Container,
  Content,
  Cover,
  CoverBox,
  Title,
} from "./style";
import { useBooks } from "../../provider/Books";

const CoverGenerator = () => {
  const { author, bookTitle, bookSubTitle } = useBooks();

  const [shape, setShape] = useState("triangle");
  const [color, setColor] = useState("green");
  const [cover, setCover] = useState([]);

  const colors = {
    green: {
      textColor: "#FFF",
      backgroundColor: "#7ABF85",
      randomColors: ["#52805877", "#29402C77", "#93E69F77"],
    },
    yellow: {
      textColor: "#FFF",
      backgroundColor: "#BFBC88",
      randomColors: ["#807E5B77", "#403F2D77", "#E6E2A377"],
    },
    blue: {
      textColor: "#FFF",
      backgroundColor: "#737CBF",
      randomColors: ["#4D528077", "#26294077", "#8A95E677"],
    },
    pink: {
      textColor: "#FFF",
      backgroundColor: "#B77CBF",
      randomColors: ["#7A538077", "#3D294077", "#DB95E577"],
    },
    aqua: {
      textColor: "#FFF",
      backgroundColor: "#86BFB7",
      randomColors: ["#59807A77", "#2D403D77", "#9EE3D977"],
    },
    red: {
      textColor: "#FFF",
      backgroundColor: "#BF7E7A",
      randomColors: ["#80545277", "#402A2977", "#E0949077"],
    },
    orange: {
      textColor: "#FFF",
      backgroundColor: "#BF946F",
      randomColors: ["#80634A77", "#40312577", "#E0AF8377"],
    },
  };

  const randomSize = (maxSize) => {
    return Math.floor(Math.random() * maxSize - 20);
  };

  const randomPosition = () => {
    return { vertical: randomSize(426), horizontal: randomSize(266) };
  };

  const coverGeneration = () => {
    const shapes = [];
    for (let index = 0; index < 30; index++) {
      shapes.push({
        size: randomSize(200),
        position: randomPosition(),
      });
    }
    setCover(shapes);
  };

  return (
    <Container>
      <Content>
        <Title>
          Agora é escolha a <span>capa</span> do seu livro:
        </Title>

        <CoverBox>
          <ConfigBox>
            <ConfigFields>
              <p>Escoha o formato:</p>
              <select onChange={(e) => setShape(e.target.value)}>
                <option value="triangle">Triângulo</option>
                <option value="circle">Círculo</option>
                <option value="square">Quadrado</option>
              </select>
            </ConfigFields>
            <ConfigFields>
              <p>Escolha a cor:</p>
              <select onChange={(e) => setColor(e.target.value)}>
                <option value="green">Verde</option>
                <option value="yellow">Amarelo</option>
                <option value="blue">Azul</option>
                <option value="pink">Rosa</option>
                <option value="aqua">Aqua</option>
                <option value="red">Vermelho</option>
                <option value="orange">Laranja</option>
              </select>
            </ConfigFields>
            <Button onClick={() => coverGeneration()}>Gerar capa</Button>
          </ConfigBox>
          <Cover
            $background={colors[color].backgroundColor}
            $color={colors[color].textColor}
          >
            <BookTitle>
              <span>{bookTitle}</span>
              <p>{bookSubTitle}</p>
            </BookTitle>
            <Author>
              <span>{author}</span>
            </Author>

            {cover.map((item, index) => (
              <Shape
                key={index}
                shape={shape}
                size={item.size}
                position={item.position}
                color={colors[color].randomColors}
              />
            ))}
          </Cover>
        </CoverBox>
      </Content>
    </Container>
  );
};

export default CoverGenerator;
