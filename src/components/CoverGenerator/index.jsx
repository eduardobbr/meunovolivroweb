import { useState } from "react";
import Shape from "../Shape";
import { Container, Cover } from "./style";
import { useBooks } from "../../provider/Books";

const CoverGenerator = () => {
  const { bookSize } = useBooks();

  const [shape, setShape] = useState({ name: "triangle", amount: 30 });
  const [color, setColor] = useState("green");
  const [icon, setIcon] = useState("");
  const [cover, setCover] = useState([]);

  const randomSize = (maxSize) => {
    return Math.floor(Math.random() * maxSize - 20);
  };

  const randomPosition = (size) => {
    return size === "16x23"
      ? { vertical: randomSize(230), horizontal: randomSize(160) }
      : size === "15x21"
      ? { vertical: randomSize(210), horizontal: randomSize(150) }
      : { vertical: randomSize(210), horizontal: randomSize(140) };
  };

  const coverGeneration = () => {
    const shapes = [];
    for (let index = 0; index < shape.amount; index++) {
      shapes.push({
        size: randomSize(100),
        position: randomPosition(bookSize),
      });
    }
    setCover(shapes);
  };

  return (
    <Container>
      <Cover $size={bookSize}>
        {cover.map((item, index) => (
          <Shape
            key={index}
            shape={shape.name}
            size={item.size}
            position={item.position}
          />
        ))}
      </Cover>
      <button onClick={() => coverGeneration()}>Teste</button>
    </Container>
  );
};

export default CoverGenerator;
