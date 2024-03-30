import styled from "styled-components";
import PropTypes from "prop-types";
import Title from "./Title";
import OrderInput from "./OrderInput";
import { BASE_URL } from "../constants";

const StyledOrderItem = styled.details`
  &[open] summary::after {
    top: 20px;
    transform: rotate(180deg);
  }

  @media (width >= 768px) {
    &[open] summary::after {
      top: 15px;
    }
  }

  @media (width >= 1280px) {
    &[open] summary::after {
      top: 18px;
    }
  }
`;

const Summary = styled(Title)`
  position: relative;
  padding-right: 75px;
  line-height: 1.17;
  text-align: left;
  color: hsl(var(--color-grey));
  cursor: pointer;

  &::marker {
    content: none;
  }

  &::after {
    content: "";
    position: absolute;
    top: 30px;
    right: 0;
    transform: translateY(-50%);
    display: block;
    width: 18px;
    height: 13px;
    background-image: ${`url("${BASE_URL}/images/icons/arrow.svg")`};
    background-repeat: no-repeat;
    background-size: 100% auto;
  }

  @media (width >= 768px) {
    font-size: 32px;
    line-height: 1.5;

    &::after {
      top: 25px;
    }
  }

  @media (width >= 1280px) {
    font-size: 40px;
    line-height: 1.2;
  }
`;

const List = styled.ul`
  display: grid;
  gap: 16px;
  margin: 31px 0 0;
  padding: 0;
  list-style: none;

  @media (width >= 768px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 9px;
    margin-top: 40px;
  }

  @media (width >= 1280px) {
    gap: 24px;
    margin-top: 57px;
  }
`;

function OrderItem({ item }) {
  const { title, question, options } = item;

  return (
    <StyledOrderItem>
      <Summary as="summary">{question}</Summary>
      <List>
        {options.map((option) => (
          <OrderInput key={option.title} option={option} title={title} />
        ))}
      </List>
    </StyledOrderItem>
  );
}

OrderItem.propTypes = {
  item: PropTypes.object,
};

export default OrderItem;
