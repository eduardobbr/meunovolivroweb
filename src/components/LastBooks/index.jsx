import {
  Container,
  Product,
  ProductCategory,
  ProductImg,
  ProductList,
  ProductTitle,
  ProductValue,
  Title,
} from "./style";

const LastBooks = () => {
  return (
    <Container>
      <Title>Já publicados</Title>
      <ProductList>
        <Product>
          <ProductImg
            src="http://localhost:1337/uploads/shop_img01_5e32e7e7cc.png"
            alt="Livro a venda"
          />
          <ProductCategory>Categoria</ProductCategory>
          <ProductTitle>Titulo do livro</ProductTitle>
          <ProductValue>R$ 50,00</ProductValue>
        </Product>
        <Product>
          <ProductImg
            src="http://localhost:1337/uploads/shop_img01_5e32e7e7cc.png"
            alt="Livro a venda"
          />
          <ProductCategory>Categoria</ProductCategory>
          <ProductTitle>Titulo do livro</ProductTitle>
          <ProductValue>R$ 50,00</ProductValue>
        </Product>
        <Product>
          <ProductImg
            src="http://localhost:1337/uploads/shop_img01_5e32e7e7cc.png"
            alt="Livro a venda"
          />
          <ProductCategory>Categoria</ProductCategory>
          <ProductTitle>Titulo do livro</ProductTitle>
          <ProductValue>R$ 50,00</ProductValue>
        </Product>
        <Product>
          <ProductImg
            src="http://localhost:1337/uploads/shop_img01_5e32e7e7cc.png"
            alt="Livro a venda"
          />
          <ProductCategory>Categoria</ProductCategory>
          <ProductTitle>Titulo do livro</ProductTitle>
          <ProductValue>R$ 50,00</ProductValue>
        </Product>
      </ProductList>
    </Container>
  );
};

export default LastBooks;
