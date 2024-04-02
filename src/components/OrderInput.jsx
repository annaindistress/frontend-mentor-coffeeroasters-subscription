import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import PropTypes from "prop-types";
import Title from "./Title";
import { getOptions, updateOption, updateShipmentPrice } from "./orderSlice";
import { PRICES } from "../constants";

const Item = styled.li``;

const Input = styled.input`
  &:checked ~ label {
    color: hsl(var(--color-cream));
    background-color: hsl(var(--color-cyan));
  }

  &:focus-visible ~ label {
    background-color: hsl(var(--color-orange));
  }
`;

const Label = styled.label`
  display: block;
  min-height: 140px;
  padding: 24px 25px;
  background-color: hsl(var(--color-cream-dark));
  border-radius: 8px;
  cursor: pointer;

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      background-color: hsl(var(--color-orange));
    }
  }

  @media (width >= 768px) {
    min-height: 250px;
    padding-block: 32px;
    padding-right: 20px;
  }

  @media (width >= 1280px) {
    padding-left: 28px;
  }
`;

const StyledTitle = styled(Title)`
  display: block;
  margin-bottom: 7px;
  text-transform: capitalize;
  text-align: left;

  @media (width >= 768px) {
    margin-bottom: 23px;
  }
`;

const Text = styled.span`
  display: block;
  font-size: 16px;
  line-height: 1.63;

  @media (width >= 768px) {
    padding-right: 8px;
  }
`;

function OrderInput({ option, id }) {
  const dispatch = useDispatch();
  const options = useSelector(getOptions);
  const inputId = `${id}-${option.title.toLowerCase().replace(/\s+/g, "")}`;

  let newDescription = "";
  let newPrice = "";
  const oldPrice = (option.description.match(/-?\d+\.\d+/g) || []).at(0);

  if (id === "deliveries" && options.quantity !== "") {
    newPrice = PRICES[options.quantity][option.title];
    newDescription = option.description.replace(oldPrice, newPrice);
  }

  function handleSelection() {
    dispatch(updateOption({ id, value: option.title }));

    if (id === "deliveries") {
      dispatch(updateShipmentPrice(newPrice !== "" ? newPrice : oldPrice));
    }
  }

  return (
    <Item>
      <Input
        type="radio"
        id={inputId}
        name={id}
        className="sr-only"
        checked={options[id] === option.title}
        onChange={handleSelection}
      />
      <Label htmlFor={inputId}>
        <StyledTitle as="span">{option.title}</StyledTitle>
        <Text>
          {newDescription !== "" ? newDescription : option.description}
        </Text>
      </Label>
    </Item>
  );
}

OrderInput.propTypes = {
  option: PropTypes.object,
  id: PropTypes.string,
};

export default OrderInput;
