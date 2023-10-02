import { Content } from "./style";
import "react-quill/dist/quill.core.css"; // Importe o estilo CSS
import "react-quill/dist/quill.snow.css"; // Importe o estilo CSS

import { useRef } from "react";
import { useReactToPrint } from "react-to-print";

const TextPreview = ({ bookContent }) => {
  const printComp = useRef();

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
      ></Content>

      <button onClick={handlePrint}>Download Preview</button>
    </>
  );
};

export default TextPreview;
