import styled from "styled-components";
import ProductBox from "./ProductBox";

const StyledProdutcsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;
export default function ProductsGrid({ products }) {
  return (
    <StyledProdutcsGrid>
      {products?.length > 0 &&
        products.map((product) => (
          <ProductBox key={product._id} {...product} />
        ))}
    </StyledProdutcsGrid>
  );
}
