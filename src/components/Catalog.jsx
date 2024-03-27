import styled from "styled-components";
import Title from "./Title";

const StyledCatalog = styled.section``;

const CatalogTitle = styled(Title)`
  position: relative;
  margin-bottom: 12px;
  font-size: 48px;
  line-height: 1.8;
  text-transform: lowercase;
  color: hsl(var(--color-grey));

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    display: block;
    background-image: linear-gradient(
      to bottom,
      hsla(var(--color-cream), 0) 0,
      hsl(var(--color-cream)) 100%
    );
  }

  @media (width >= 768px) {
    margin-bottom: -59px;
    font-size: 96px;
    line-height: 1.2;
    opacity: 0.5;
  }

  @media (width >= 1280px) {
    margin-bottom: -70px;
    font-size: 150px;
    line-height: 1.3;
  }
`;

function Catalog() {
  return (
    <StyledCatalog>
      <CatalogTitle as="h2">Our collection</CatalogTitle>
    </StyledCatalog>
  );
}

export default Catalog;
