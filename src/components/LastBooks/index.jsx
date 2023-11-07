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
            src="https://meunovolivro.com.br/wp-content/uploads/2022/07/shop-img01.png"
            alt="Livro a venda"
          />
          <ProductCategory>Categoria</ProductCategory>
          <ProductTitle>Titulo do livro</ProductTitle>
          <ProductValue>R$ 50,00</ProductValue>
        </Product>
        <Product>
          <ProductImg
            src="https://meunovolivro.com.br/wp-content/uploads/2022/07/shop-img01.png"
            alt="Livro a venda"
          />
          <ProductCategory>Categoria</ProductCategory>
          <ProductTitle>Titulo do livro</ProductTitle>
          <ProductValue>R$ 50,00</ProductValue>
        </Product>
        <Product>
          <ProductImg
            src="https://meunovolivro.com.br/wp-content/uploads/2022/07/shop-img01.png"
            alt="Livro a venda"
          />
          <ProductCategory>Categoria</ProductCategory>
          <ProductTitle>Titulo do livro</ProductTitle>
          <ProductValue>R$ 50,00</ProductValue>
        </Product>
        <Product>
          <ProductImg
            src="https://meunovolivro.com.br/wp-content/uploads/2022/07/shop-img01.png"
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
