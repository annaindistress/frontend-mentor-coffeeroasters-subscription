import { useSelector } from "react-redux";
import styled from "styled-components";
import Title from "./Title";
import { getOptions } from "./orderSlice";

const Text = styled(Title)`
  line-height: 1.67;
  text-align: left;

  &::before {
    content: "“";
  }

  &::after {
    content: "”";
  }
`;

const Main = styled.span`
  text-transform: capitalize;
  color: hsl(var(--color-cyan));
`;

function Summary() {
  const { preferences, beanType, quantity, grindOption, deliveries } =
    useSelector(getOptions);

  const preferenceSelection = (
    <Main>{preferences !== "" ? preferences : "_____"}</Main>
  );

  const beanSelection = <Main>{beanType !== "" ? beanType : "_____"}</Main>;

  const quantitySelection = <Main>{quantity !== "" ? quantity : "_____"}</Main>;

  const grindSelection = (
    <Main>
      {grindOption !== "" && grindOption !== null ? grindOption : "_____"}
    </Main>
  );

  const deliverySelection = (
    <Main>{deliveries !== "" ? deliveries : "_____"}</Main>
  );

  return (
    <Text as="p">
      I drink my coffee
      {preferences === "Capsule" ? " using " : " as "}
      {preferenceSelection}, with a {beanSelection} type of bean.{" "}
      {quantitySelection} {preferences === "Capsule" ? "" : "ground ala "}
      {preferences !== "Capsule" && grindSelection}, sent to me{" "}
      {deliverySelection}.
    </Text>
  );
}

export default Summary;
