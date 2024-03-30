import styled from "styled-components";
import Title from "./Title";
import Button from "./Button";
import Instruction from "./Instruction";

const Section = styled.section`
  width: calc(100% - 48px);
  max-width: 689px;
  margin-inline: auto;
  margin-bottom: 118px;
  text-align: center;

  @media (width >= 768px) {
    margin-bottom: 143px;
    text-align: left;
  }

  @media (width >= 1280px) {
    max-width: 1110px;
    margin-bottom: 200px;
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

const StyledButton = styled(Button)`
  margin-top: 80px;

  @media (width >= 768px) {
    margin-top: 24px;
  }

  @media (width >= 1280px) {
    margin-top: 65px;
  }
`;

function HowToLight() {
  return (
    <Section>
      <InstructionTitle as="h2">How it works</InstructionTitle>
      <Instruction />
      <StyledButton to="/create-plan">Create your plan</StyledButton>
    </Section>
  );
}

export default HowToLight;
