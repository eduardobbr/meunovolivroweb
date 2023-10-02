import { Button, Content } from "./style";
import "react-quill/dist/quill.core.css"; // Importe o estilo CSS

import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { useBooks } from "../../provider/Books";

const TextPreview = ({ bookContent }) => {
  const printComp = useRef();
  const { bookSize } = useBooks();

  const handlePrint = useReactToPrint({
    content: () => printComp.current,
    documentTitle: "BookPreview",
  });

  return (
    <>
      <Content
        ref={printComp}
        className="ql-editor"
        dangerouslySetInnerHTML={{ __html: bookContent }}
        $size={bookSize}
      ></Content>

      <Button onClick={handlePrint}>Download Preview</Button>
    </>
  );
};

export default TextPreview;
