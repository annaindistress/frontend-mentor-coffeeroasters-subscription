import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import styled from "styled-components";
import PropTypes from "prop-types";
import Title from "./Title.jsx";
import OrderInput from "./OrderInput.jsx";
import Arrow from "../assets/arrow.svg?react";
import { getOptions } from "./orderSlice.js";
import { orderData } from "../orderData.js";

const Item = styled.details`
  &[open] summary svg {
    transform: rotate(180deg);
  }

  &[disabled] summary {
    pointer-events: none;
    user-select: none;
    opacity: 0.5;
  }
`;

const Question = styled(Title)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 60px;
  line-height: 1.17;
  text-align: left;
  color: hsl(var(--color-grey));
  outline: none;
  cursor: pointer;

  &::marker {
    content: none;
  }

  &::-webkit-details-marker {
    display: none;
  }

  svg {
    min-width: 19px;
    height: 12px;
    color: hsl(var(--color-cyan));
  }

  &:focus-visible {
    svg {
      color: hsl(var(--color-cyan-hover));
    }
  }

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      svg {
        color: hsl(var(--color-cyan-hover));
      }
    }
  }

  @media (width >= 768px) {
    font-size: 32px;
    line-height: 1.5;
  }

  @media (width >= 1280px) {
    font-size: 40px;
    line-height: 1.2;
  }
`;

const List = styled.ul`
  display: grid;
  gap: 16px;
  margin: 32px 0 0;
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

function OrderItem({ item, openDropdowns, handleDropdowns }) {
  const { id, question, options } = item;
  const navigate = useNavigate();
  const stateOptions = useSelector(getOptions);

  const itemRef = useRef();
  const isDisabled =
    id === "grindOption" && stateOptions.preferences === "Capsule";
  const isOpen =
    openDropdowns.includes(id) ||
    stateOptions[id] !== "" ||
    (openDropdowns.length === 0 && id === orderData.at(0).id);

  useEffect(
    function () {
      if (isOpen && isDisabled) {
        itemRef.current.removeAttribute("open");
      }
    },
    [isDisabled, isOpen]
  );

  function handleOpen() {
    handleDropdowns(id);

    if (openDropdowns.length !== 0 && itemRef.current.hasAttribute("open")) {
      navigate(`/create-plan#${id}`);
    }
  }

  return (
    <Item
      id={id}
      ref={itemRef}
      open={isOpen}
      disabled={isDisabled}
      onToggle={handleOpen}
    >
      <Question as="summary">
        {question}
        <Arrow />
      </Question>
      <List>
        {options.map((option) => (
          <OrderInput key={option.title} option={option} id={id} />
        ))}
      </List>
    </Item>
  );
}

OrderItem.propTypes = {
  item: PropTypes.object,
  openDropdowns: PropTypes.array,
  handleDropdowns: PropTypes.func,
};

export default OrderItem;
