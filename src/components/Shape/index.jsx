import { Container } from "./style";

const Shape = ({ shape, size, position, color }) => {
  return (
    <Container
      $shape={shape}
      $size={size}
      $position={position}
      $backgroundColor={color[Math.floor(Math.random() * (color.length - 1))]}
    />
  );
};

export default Shape;
