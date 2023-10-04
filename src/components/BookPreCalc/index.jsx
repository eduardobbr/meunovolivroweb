import { useCallback, useEffect, useState } from "react";
import {
  Container,
  FieldName,
  FormBox,
  ImgBox,
  Paragraph,
  SelectBox,
  SelectItem,
  SubTitle,
  TextBox,
  Title,
} from "./style";
import { useMediaQuery } from "@material-ui/core";
import { theme } from "../../styles/theme";
import { Link } from "react-router-dom";

const BookPreCalc = () => {
  const [format, setFormat] = useState("1421");
  const [paper, setPaper] = useState("polenSoft90g");
  const [pagesAmount, setPagesAmount] = useState("80");
  const [value, setValue] = useState(0);

  const mobile = useMediaQuery(theme.breakpoints.up("md"));

  const changeFormat = (event) => {
    setFormat(event.target.value);
  };
  const changePaper = (event) => {
    setPaper(event.target.value);
  };
  const changePagesAmount = (event) => {
    setPagesAmount(event.target.value);
  };

  const valueCalc = useCallback(() => {
    const values = {
      1421: 1000,
      1521: 1500,
      1623: 2000,
      polenSoft90g: 1000,
      coucheFosco90g: 1500,
      coucheBrilho90g: 2000,
      80: 500,
      120: 600,
      160: 700,
      unlimited: 1000,
    };

    const sum = values[format] + values[paper] + values[pagesAmount];

    setValue(sum);
  }, [format, paper, pagesAmount]);

  useEffect(() => {
    valueCalc();
  }, [format, paper, pagesAmount, valueCalc]);

  return (
    <Container>
      <FormBox>
        <TextBox>
          <Title>Configure seu livro abaixo:</Title>
          <SubTitle>Faça uma simulação dos valores</SubTitle>
        </TextBox>

        <div>
          <SelectBox>
            <FieldName htmlFor="format">Formato:</FieldName>
            <SelectItem
              name="format"
              id="format"
              placeholder="Escolha uma opção"
              onChange={(e) => changeFormat(e)}
              value={format}
            >
              <option value="1421">14x21cm</option>
              <option value="1521">15x21cm</option>
              <option value="1623">16x23cm</option>
            </SelectItem>
          </SelectBox>

          <SelectBox>
            <FieldName htmlFor="paper">Papel:</FieldName>
            <SelectItem
              name="paper"
              id="paper"
              placeholder="Escolha uma opção"
              onChange={(e) => changePaper(e)}
              value={paper}
            >
              <option value="polenSoft90g">Pólen Soft 90g</option>
              <option value="coucheFosco90g">Couchê Fosco 90g</option>
              <option value="coucheBrilho90g">Couchê Brilho 90g</option>
            </SelectItem>
          </SelectBox>

          <SelectBox>
            <FieldName htmlFor="pagesAmount">Número de páginas:</FieldName>
            <SelectItem
              name="pagesAmount"
              id="pagesAmount"
              placeholder="Escolha uma opção"
              onChange={(e) => changePagesAmount(e)}
              value={pagesAmount}
            >
              <option value="80">Até 80 páginas</option>
              <option value="120">Até 120 páginas</option>
              <option value="160">Até 160 páginas</option>
              <option value="unlimited">Mais de 160 páginas</option>
            </SelectItem>
          </SelectBox>
        </div>

        <div>
          <SubTitle>
            A partir de:{" "}
            {new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(value)}
          </SubTitle>
          <Paragraph>
            ou até 10x de{" "}
            {new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(value / 10)}
          </Paragraph>
          <Paragraph>
            <Link to="/login">Comece a produção</Link>
          </Paragraph>
        </div>
      </FormBox>

      {mobile ? (
        <ImgBox>
          <img
            src="http://localhost:1337/uploads/read_image01_4a5978994c.jpg"
            alt="Imagem de um Leitor"
          />
        </ImgBox>
      ) : (
        <></>
      )}
    </Container>
  );
};

export default BookPreCalc;
