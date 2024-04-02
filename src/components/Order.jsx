import { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import ScrollToHashElement from "./ScrollToHashElement";
import Button from "./Button";
import OrderNavigation from "./OrderNavigation";
import OrderItem from "./OrderItem.jsx";
import { getOptions } from "./orderSlice.js";
import { orderData } from "../orderData.js";

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

function Order() {
  const [openDropdowns, setOpenDropDowns] = useState([orderData.at(0).id]);
  const options = useSelector(getOptions);
  const isDisabled = hasEmptyValue(options);

  function handleOpenDropdowns(id) {
    if (!openDropdowns.includes(id)) {
      setOpenDropDowns((items) => [...items, id]);
    }
  }

  return (
    <Form>
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
      <OrderButton as="button" type="submit" disabled={isDisabled}>
        Create my plan!
      </OrderButton>
    </Form>
  );
}

export default Order;
