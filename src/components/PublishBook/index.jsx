import { cloneElement, useRef } from "react";
import { useBooks } from "../../provider/Books";
import { useReactToPrint } from "react-to-print";
import { CoverBox, Printer } from "./style";
import "react-quill/dist/quill.core.css"; // Importe o estilo CSS

const PublishBook = () => {
  const {
    bookContent,
    bookStyle,
    bookTitle,
    bookSubTitle,
    author,
    isbn,
    audience,
    keywords,
    sinopse,
    bookCover,
  } = useBooks();

  const bookCoverResize = () => {
    return cloneElement(bookCover, {
      className: bookCover.props.className + " makeLarge",
    });
  };

  console.log(bookContent);

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <section onClick={handlePrint}>
      teste
      <Printer
        ref={componentRef}
        style={{ display: "none" }}
        $bookStyle={bookStyle}
      >
        <CoverBox>{bookCover && bookCoverResize()}</CoverBox>
        <div
          className="ql-editor"
          dangerouslySetInnerHTML={{ __html: bookContent }}
        ></div>
      </Printer>
    </section>
  );
};

export default PublishBook;
