import { Container } from "./style";

const Shape = ({ shape, size, position }) => {
  return <Container $shape={shape} $size={size} $position={position} />;
};

export default Shape;
