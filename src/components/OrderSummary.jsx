import styled from "styled-components";
import Summary from "./Summary";
import Section from "./Section";

const Container = styled(Section)`
  width: 100%;
  margin-top: 20px;
  margin-bottom: -45px;
  padding: 32px 25px;

  @media (width >= 768px) {
    margin-top: 43px;
    margin-bottom: -60px;
    padding: 27px 43px;
  }

  @media (width >= 1280px) {
    margin-top: 5px;
    margin-bottom: -47px;
    padding: 47px 64px;
  }
`;

const Title = styled.p`
  margin-top: 0;
  margin-bottom: 8px;
  font-size: 16px;
  line-height: 1.62;
  text-transform: uppercase;
  color: white;
  opacity: 0.5;
`;

function OrderSummary() {
  return (
    <Container as="div">
      <Title>Order summary</Title>
      <Summary />
    </Container>
  );
}

export default OrderSummary;
