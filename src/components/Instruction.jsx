import styled from "styled-components";
import Title from "./Title";
import Button from "./Button";

const instructions = [
  {
    title: "Pick your coffee",
    description:
      "Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out.",
  },
  {
    title: "Choose the frequency",
    description:
      "Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal.",
  },
  {
    title: "Receive and enjoy!",
    description:
      "We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning world-class coffees curated to provide a distinct tasting experience.",
  },
];

const Section = styled.section`
  width: calc(100% - 48px);
  max-width: 689px;
  margin-inline: auto;
  text-align: center;

  @media (width >= 768px) {
    text-align: left;
  }

  @media (width >= 1280px) {
    max-width: 1110px;
  }
`;

const InstructionTitle = styled(Title)`
  margin-bottom: 79px;
  color: hsl(var(--color-grey));

  @media (width >= 768px) {
    margin-bottom: 40px;
  }

  @media (width >= 1280px) {
    margin-bottom: 80px;
    text-align: left;
  }
`;

const List = styled.ol`
  display: grid;
  gap: 57px;
  margin: 0 0 80px;
  padding: 0;
  list-style: none;
  counter-reset: instruction 0;

  @media (width >= 768px) {
    position: relative;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    margin-bottom: 24px;

    &::before {
      content: "";
      position: absolute;
      top: 15px;
      left: 0;
      display: block;
      width: 70%;
      height: 2px;
      background-color: hsl(var(--color-orange));
    }
  }

  @media (width >= 1280px) {
    gap: 30px;
    margin-bottom: 65px;
  }
`;

const Item = styled.li`
  position: relative;
  counter-increment: instruction 1;

  &::before {
    content: "0" counter(instruction);
    display: block;
    margin-bottom: 24px;
    font-family: var(--font-fancy);
    font-size: 72px;
    line-height: 1;
    text-align: center;
    color: hsl(var(--color-orange));
  }

  @media (width >= 768px) {
    padding-top: 79px;

    &::before {
      margin-bottom: 42px;
      text-align: left;
    }

    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      display: block;
      width: 31px;
      height: 31px;
      background-color: hsl(var(--color-cream));
      border: 2px solid hsl(var(--color-cyan));
      border-radius: 50%;
    }
  }

  @media (width >= 1280px) {
    padding-top: 99px;

    &::before {
      margin-bottom: 38px;
    }
  }
`;

const ItemTitle = styled(Title)`
  margin-bottom: 25px;
  font-size: 28px;
  line-height: 1.15;

  @media (width >= 768px) {
    margin-bottom: 40px;
  }

  @media (width >= 1280px) {
    margin-right: 100px;
    font-size: 32px;
    line-height: 1.13;
    text-align: left;
  }
`;

const Text = styled.p`
  margin: 0;
  line-height: 1.64;
  text-align: center;

  @media (width >= 768px) {
    padding-right: 20px;
    text-align: left;
  }

  @media (width >= 1280px) {
    padding-right: 65px;
    font-size: 16px;
    line-height: 1.63;
  }
`;

function Instruction() {
  return (
    <Section>
      <InstructionTitle as="h2">How it works</InstructionTitle>
      <List>
        {instructions.map((item) => (
          <Item key={item.title}>
            <ItemTitle as="h3">{item.title}</ItemTitle>
            <Text>{item.description}</Text>
          </Item>
        ))}
      </List>
      <Button to="/create-plan">Create your plan</Button>
    </Section>
  );
}

export default Instruction;
