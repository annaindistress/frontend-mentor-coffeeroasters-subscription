import styled from "styled-components";
import Title from "./Title";
import { BASE_URL } from "../constants";

const catalogItems = [
  {
    title: "Gran Espresso",
    description:
      "Light and flavorful blend with cocoa and black pepper for an intense experience",
  },
  {
    title: "Planalto",
    description:
      "Brazilian dark roast with rich and velvety body, and hints of fruits and nuts",
  },
  {
    title: "Piccollo",
    description:
      "Mild and smooth blend featuring notes of toasted almond and dried cherry",
  },
  {
    title: "Danche",
    description:
      "Ethiopian hand-harvested blend densely packed with vibrant fruit notes",
  },
];

const StyledCatalog = styled.section`
  margin-bottom: 120px;

  @media (width >= 768px) {
    margin-bottom: 144px;
  }

  @media (width >= 1280px) {
    margin-bottom: 202px;
  }
`;

const CatalogTitle = styled(Title)`
  position: relative;
  margin-bottom: 24px;
  font-size: 40px;
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
    margin-bottom: -48px;
    font-size: 96px;
    line-height: 1.2;
    opacity: 0.5;
  }

  @media (width >= 1280px) {
    margin-bottom: -78px;
    font-size: 150px;
    line-height: 1.3;
  }
`;

const List = styled.ul`
  position: relative;
  display: grid;
  gap: 60px;
  width: calc(100% - 92px);
  max-width: 573px;
  margin: 0 auto;
  padding: 0;
  list-style: none;

  @media (width >= 768px) {
    gap: 40px;
  }

  @media (width >= 1280px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 50px;
    max-width: 1110px;
  }
`;

const Item = styled.li`
  display: grid;
  gap: 16px;

  @media (width >= 768px) {
    grid-template-columns: 255px 1fr;
    grid-template-rows: repeat(2, min-content);
    gap: 24px 36px;
  }

  @media (width >= 1280px) {
    grid-template-columns: 1fr;
  }
`;

const ItemTitle = styled(Title)`
  font-size: 24px;
  line-height: 1.33;

  @media (width >= 768px) {
    align-self: end;
    margin-bottom: 0;
    padding-top: 16px;
    text-align: left;
  }

  @media (width >= 1280px) {
    padding-top: 0;
    text-align: center;
  }
`;

const ItemText = styled.p`
  margin: 0;
  line-height: 1.67;
  text-align: center;

  @media (width >= 768px) {
    align-self: start;
    text-align: left;
  }

  @media (width >= 1280px) {
    text-align: center;
  }
`;

const ItemImage = styled.img`
  grid-row: 1;
  max-width: 188px;
  margin-inline: auto;
  margin-bottom: 8px;
  padding-left: 11px;

  @media (width >= 768px) {
    grid-row: 1 / span 3;
    max-width: 225px;
    margin-inline: 22px;
    padding-left: 0;
  }

  @media (width >= 1280px) {
    grid-row: 1;
    margin-bottom: 50px;
  }
`;

function Catalog() {
  return (
    <StyledCatalog>
      <CatalogTitle as="h2">Our collection</CatalogTitle>
      <List>
        {catalogItems.map((item) => (
          <Item key={item.title}>
            <ItemTitle as="h3">{item.title}</ItemTitle>
            <ItemText>{item.description}</ItemText>
            <ItemImage
              src={`${BASE_URL}images/catalog/${item.title
                .toLowerCase()
                .replace(" ", "-")}.png`}
              alt={`Image of ${item.title}'s package`}
              width="200"
              height="151"
            />
          </Item>
        ))}
      </List>
    </StyledCatalog>
  );
}

export default Catalog;
