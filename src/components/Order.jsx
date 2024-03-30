import styled from "styled-components";
import Button from "./Button";
import OrderItem from "./OrderItem";
import Title from "./Title";

const formData = [
  {
    title: "Preferences",
    question: "How do you drink your coffee?",
    options: [
      {
        title: "Capsule",
        description: "Compatible with Nespresso systems and similar brewers",
      },
      {
        title: "Filter",
        description:
          "For pour over or drip methods like Aeropress, Chemex, and V60",
      },
      {
        title: "Espresso",
        description:
          "Dense and finely ground beans for an intense, flavorful experience",
      },
    ],
  },
  {
    title: "Bean type",
    question: "What type of coffee?",
    options: [
      {
        title: "Single origin",
        description:
          "Distinct, high quality coffee from a specific family-owned farm",
      },
      {
        title: "Decaf",
        description:
          "Just like regular coffee, except the caffeine has been removed",
      },
      {
        title: "Blended",
        description:
          "Combination of two or three dark roasted beans of organic coffees",
      },
    ],
  },
  {
    title: "Quantity",
    question: "How much would you like?",
    options: [
      {
        title: "250g",
        description:
          "Perfect for the solo drinker. Yields about 12 delicious cups.",
      },
      {
        title: "500g",
        description:
          "Perfect option for a couple. Yields about 40 delectable cups.",
      },
      {
        title: "1000g",
        description:
          "Perfect for offices and events. Yields about 90 delightful cups.",
      },
    ],
  },
  {
    title: "Grind option",
    question: "Want us to grind them?",
    options: [
      {
        title: "Wholebean",
        description: "Best choice if you cherish the full sensory experience",
      },
      {
        title: "Filter",
        description:
          "For drip or pour-over coffee methods such as V60 or Aeropress",
      },
      {
        title: "Cafetiére",
        description:
          "Course ground beans specially suited for french press coffee",
      },
    ],
  },
  {
    title: "Deliveries",
    question: "How often should we deliver?",
    options: [
      {
        title: "Every week",
        description: "$14.00 per shipment. Includes free first-class shipping.",
      },
      {
        title: "Every 2 weeks",
        description: "$17.25 per shipment. Includes free priority shipping.",
      },
      {
        title: "Every month",
        description: "$22.50 per shipment. Includes free priority shipping.",
      },
    ],
  },
];

const Form = styled.form`
  display: grid;
  gap: 100px;
  width: calc(100% - 48px);
  max-width: 1110px;
  margin-inline: auto;
  margin-bottom: 119px;

  @media (width >= 768px) {
    width: calc(100% - 80px);
  }

  @media (width >= 1280px) {
    grid-template-columns: 255px 1fr;
    gap: 87px 125px;
  }
`;

const List = styled.ol`
  display: none;
  counter-reset: steps 0;

  @media (width >= 1280px) {
    display: grid;
    grid-auto-rows: max-content;
    grid-row: span 6;
    gap: 24px;
    margin: 0;
    padding: 0;
    list-style: none;
  }
`;

const ListItem = styled.li`
  counter-increment: steps 1;
`;

const ListButton = styled(Title)`
  display: block;
  width: 100%;
  padding: 0 0 24px 0;
  text-transform: capitalize;
  text-align: left;
  background-color: transparent;
  border: 0;
  border-bottom: 1px solid hsla(var(--color-grey), 0.25);
  opacity: ${(props) => (props.$active ? "1" : "0.4")};
  cursor: pointer;

  &::before {
    content: "0" counter(steps);
    margin-right: 26px;
    color: ${(props) => (props.$active ? "hsl(var(--color-cyan))" : "inherit")};
  }
`;

const OrderButton = styled(Button)`
  @media (width >= 1280px) {
    margin-right: 0;
  }
`;

function Order() {
  return (
    <Form>
      <List>
        {formData.map((item) => (
          <ListItem key={item.title}>
            <ListButton as="button">{item.title}</ListButton>
          </ListItem>
        ))}
      </List>
      {formData.map((item) => (
        <OrderItem key={item.title} item={item} />
      ))}
      <OrderButton as="button" type="submit">
        Create my plan!
      </OrderButton>
    </Form>
  );
}

export default Order;
