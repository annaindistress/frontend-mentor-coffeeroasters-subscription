import styled from "styled-components";
import Title from "./Title";
import { BASE_URL } from "../constants";

const headquarters = [
  {
    country: "United Kingdom",
    region: "SY6 1YA",
    city: "Alcaston",
    address: "68 Asfordby Rd",
    phone: "+44 1241 918425",
  },
  {
    country: "Canada",
    region: "Ontario M4P 1A6",
    city: "Toronto",
    address: "1528 Eglinton Avenue",
    phone: "+1 416 485 2997",
  },
  {
    country: "Australia",
    region: "Victoria",
    city: "Kewell",
    address: "36 Swanston Street",
    phone: "+61 4 9928 3629",
  },
];

const Section = styled.section`
  width: calc(100% - 48px);
  max-width: 1110px;
  margin-inline: auto;
  margin-bottom: 114px;

  @media (width >= 768px) {
    width: calc(100% - 80px);
    margin-bottom: 143px;
  }

  @media (width >= 1280px) {
    margin-bottom: 169px;
  }
`;

const HeadquartersTitle = styled(Title)`
  margin-bottom: 71px;
  color: hsl(var(--color-grey));

  @media (width >= 1280px) {
    text-align: left;
  }
`;

const List = styled.ul`
  display: grid;
  gap: 80px;
  margin: 0;
  padding: 0;
  list-style: none;

  @media (width >= 768px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 9px;
  }

  @media (width >= 1280px) {
    gap: 30px;
  }
`;

const Item = styled.li`
  padding-top: 98px;
  background-image: ${(props) =>
    `url("${BASE_URL}images/countries/${props.$icon}.svg")`};
  background-repeat: no-repeat;
  background-position: top center;

  @media (width >= 768px) {
    background-position-x: left;
  }

  @media (width >= 1280px) {
    padding-top: 96px;
  }
`;

const ItemTitle = styled(Title)`
  margin-bottom: 21px;
  font-size: 28px;
  line-height: 1.3;

  @media (width >= 768px) {
    font-size: 24px;
    line-height: 1.5;
  }

  @media (width >= 1280px) {
    font-size: 32px;
    line-height: 1.13;
    text-align: left;
  }
`;

const ItemInfo = styled.address`
  font-style: normal;
  font-size: 16px;
  line-height: 1.68;
  text-align: center;

  @media (width >= 768px) {
    text-align: left;
  }
`;

const ItemLink = styled.a`
  text-decoration: none;
  color: inherit;

  &:focus-visible {
    color: hsl(var(--color-cyan));
  }

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      color: hsl(var(--color-cyan));
    }
  }
`;

function Headquarters() {
  return (
    <Section>
      <HeadquartersTitle as="h2">Our headquarters</HeadquartersTitle>
      <List>
        {headquarters.map((item) => (
          <Item
            key={item.address}
            $icon={item.country.toLowerCase().split(/\s+/g).join("-")}
          >
            <ItemTitle as="h3">{item.country}</ItemTitle>
            <ItemInfo>
              {item.address}
              <br />
              {item.city}
              <br />
              {item.region}
              <br />
              <ItemLink href={`tel:${item.phone.replace(/\s+/g, "")}`}>
                {item.phone}
              </ItemLink>
            </ItemInfo>
          </Item>
        ))}
      </List>
    </Section>
  );
}

export default Headquarters;
