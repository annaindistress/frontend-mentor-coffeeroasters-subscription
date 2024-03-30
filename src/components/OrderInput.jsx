import styled from "styled-components";
import PropTypes from "prop-types";
import Title from "./Title";

const Item = styled.li``;

const Input = styled.input`
  &:checked ~ label {
    color: hsl(var(--color-cream));
    background-color: hsl(var(--color-cyan));
  }
`;

const Label = styled.label`
  display: block;
  min-height: 140px;
  padding: 24px 25px;
  background-color: hsl(var(--color-cream-dark));
  border-radius: 8px;
  cursor: pointer;

  &:focus {
    background-color: hsl(var(--color-orange));
  }

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

function OrderInput({ option, title }) {
  const id = option.title.toLowerCase().replace(/\s+/g, "");
  const name = title.toLowerCase().replace(/\s+/g, "");

  return (
    <Item>
      <Input type="radio" id={id} name={name} className="sr-only" />
      <Label htmlFor={id}>
        <StyledTitle as="span">{option.title}</StyledTitle>
        <Text>{option.description}</Text>
      </Label>
    </Item>
  );
}

OrderInput.propTypes = {
  option: PropTypes.object,
  title: PropTypes.string,
};

export default OrderInput;
