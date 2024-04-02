import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import PropTypes from "prop-types";
import ScrollToHashElement from "./ScrollToHashElement";
import Button from "./Button";
import OrderNavigation from "./OrderNavigation";
import OrderItem from "./OrderItem.jsx";
import OrderSummary from "./OrderSummary.jsx";
import { calculatePrice, getOptions } from "./orderSlice.js";
import { orderData } from "../orderData.js";

const Form = styled.form`
  display: grid;
  gap: 100px;
  width: calc(100% - 48px);
  max-width: 1110px;
  margin-inline: auto;
  margin-bottom: 120px;

  @media (width >= 768px) {
    width: calc(100% - 80px);
    margin-bottom: 143px;
  }

  @media (width >= 1280px) {
    grid-template-columns: 255px 1fr;
    gap: 87px 125px;
    margin-bottom: 167px;
  }
`;

const OrderButton = styled(Button)`
  cursor: pointer;

  @media (width >= 1280px) {
    margin-right: 0;
  }
`;

const hasEmptyValue = (obj) => {
  for (let key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key) && obj[key] === "") {
      return true;
    }
  }
  return false;
};

function Order({ setIsOpenModal }) {
  const [openDropdowns, setOpenDropDowns] = useState([orderData.at(0).id]);
  const options = useSelector(getOptions);
  const isDisabled = hasEmptyValue(options);

  const dispatch = useDispatch();

  function handleOpenDropdowns(id) {
    if (!openDropdowns.includes(id)) {
      setOpenDropDowns((items) => [...items, id]);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(calculatePrice());
    setIsOpenModal(true);
  }

  return (
    <Form onSubmit={handleSubmit}>
      <ScrollToHashElement />
      <OrderNavigation handleDropdowns={handleOpenDropdowns} />
      {orderData.map((item) => (
        <OrderItem
          key={item.id}
          item={item}
          openDropdowns={openDropdowns}
          handleDropdowns={handleOpenDropdowns}
        />
      ))}
      <OrderSummary />
      <OrderButton as="button" type="submit" disabled={isDisabled}>
        Create my plan!
      </OrderButton>
    </Form>
  );
}

Order.propTypes = {
  setIsOpenModal: PropTypes.func,
};

export default Order;
