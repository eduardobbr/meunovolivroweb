import { Html } from "react-pdf-html";
import {
  Document,
  PDFViewer,
  Page,
  StyleSheet,
  Text,
} from "@react-pdf/renderer";
import { styleHtml, styleTest } from "./stylesQuill";

const TextPreview = ({ bookContent }) => {
  const styles = StyleSheet.create({
    page: {
      flexDirection: "row",
      paddingVertical: 96,
      paddingHorizontal: 72,
    },
  });

  const html = `
  <html>
  <body>
  <style>
   ${styleHtml}
  </style>
    <div class='ql-editor'>${bookContent}</div>
  </body>
  </html>
  `;

  return (
    <PDFViewer>
      <Document>
        <Page size="LETTER" wrap style={styles.page}>
          <Text break style={styles.text}>
            <Html resetStyles collapse={false}>
              {html}
            </Html>
          </Text>
        </Page>
      </Document>
    </PDFViewer>
  );
};

export default TextPreview;
