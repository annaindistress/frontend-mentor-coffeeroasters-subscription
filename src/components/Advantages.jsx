import styled from "styled-components";
import Section from "./Section";
import Title from "./Title";
import { BASE_URL } from "../constants";

const advantages = [
  {
    title: "Best quality",
    text: "Discover an endless variety of the world’s best artisan coffee from each of our roasters.",
  },
  {
    title: "Exclusive benefits",
    text: "Special offers and swag when you subscribe, including 30% off your first shipment.",
  },
  {
    title: "Free shipping",
    text: "We cover the cost and coffee is delivered fast. Peak freshness: guaranteed.",
  },
];

const AdvantagesSection = styled(Section)`
  margin-bottom: 718px;

  @media (width >= 768px) {
    margin-bottom: 432px;
  }

  @media (width >= 1280px) {
    margin-bottom: 352px;
  }
`;

const AdvantagesTitle = styled(Title)`
  margin-bottom: 24px;
  font-size: 28px;
  line-height: 1;

  @media (width >= 768px) {
    font-size: 32px;
    line-height: 1.5;
    text-align: center;
  }

  @media (width >= 1280px) {
    margin-bottom: 30px;
    font-size: 40px;
    line-height: 1.2;
  }
`;

const Lead = styled.p`
  max-width: 495px;
  margin: 0 auto 62px;
  line-height: 1.7;
  text-align: center;

  @media (width >= 768px) {
    margin-bottom: 70px;
  }

  @media (width >= 1280px) {
    max-width: 528px;
    margin-bottom: 86px;
    font-size: 16px;
  }
`;

const List = styled.ul`
  display: grid;
  gap: 26px;
  width: 279px;
  margin: 0 auto -660px;
  padding: 0;
  list-style: none;

  @media (width >= 768px) {
    width: 573px;
    margin-bottom: -345px;
  }

  @media (width >= 1280px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
    width: 1110px;
    margin-bottom: -251px;
  }
`;

const Item = styled.li`
  padding: 200px 15px 50px;
  background-color: hsl(var(--color-cyan));
  background-image: ${(props) =>
    `url('${BASE_URL}images/icons/${props.$icon}.svg')`};
  background-repeat: no-repeat;
  background-position: center 24%;
  border-radius: 8px;

  @media (width >= 768px) {
    padding: 41px 48px 41px 181px;
    background-position: 13.5% center;
    background-size: 56px auto;
  }

  @media (width >= 1280px) {
    padding: 200px 48px 50px;
    background-position: 48.7% 25%;
    background-size: 72px auto;
  }
`;

const ItemTitle = styled(Title)`
  margin-bottom: 24px;

  @media (width >= 768px) {
    margin-bottom: 15px;
  }

  @media (width >= 1280px) {
    margin-bottom: 24px;
  }
`;

const ItemText = styled.p`
  margin: 0;
  padding: 0 24px;
  line-height: 1.64;
  text-align: center;

  @media (width >= 768px) {
    padding-left: 0;
    padding-right: 18px;
    font-size: 16px;
    line-height: 1.56;
    text-align: left;
  }

  @media (width >= 1280px) {
    padding-right: 0;
    text-align: center;
  }
`;

function Advantages() {
  return (
    <AdvantagesSection>
      <AdvantagesTitle as="h2">Why choose us?</AdvantagesTitle>
      <Lead>
        A large part of our role is choosing which particular coffees will be
        featured in our range. This means working closely with the best coffee
        growers to give you a more impactful experience on every level.
      </Lead>
      <List>
        {advantages.map((item) => (
          <Item key={item.title} $icon={item.title.split(" ").at(-1)}>
            <ItemTitle as="h3">{item.title}</ItemTitle>
            <ItemText>{item.text}</ItemText>
          </Item>
        ))}
      </List>
    </AdvantagesSection>
  );
}

export default Advantages;
