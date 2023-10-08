import { Container, Content } from "./style";
import "react-quill/dist/quill.core.css"; // Importe o estilo CSS

import { useRef } from "react";
import { useBooks } from "../../provider/Books";

const TextPreview = ({ bookContent }) => {
  const printComp = useRef();
  const { bookStyle } = useBooks();

  return (
    <Container>
      <Content
        ref={printComp}
        className="ql-editor"
        dangerouslySetInnerHTML={{ __html: bookContent }}
        $bookStyle={bookStyle}
      ></Content>
    </Container>
  );
};

export default TextPreview;
