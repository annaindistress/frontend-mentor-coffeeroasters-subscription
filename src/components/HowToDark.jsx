import styled from "styled-components";
import Section from "./Section";
import Instruction from "./Instruction";

const StyledSection = styled(Section)`
  width: 100%;
  margin-bottom: 119px;
  padding: 85px 30px 80px;

  @media (width >= 768px) {
    margin-bottom: 144px;
    padding: 97px 40px 74px;
  }

  @media (width >= 1280px) {
    margin-bottom: 167px;
    padding: 99px 85px 103px;
  }
`;

function HowToDark() {
  return (
    <StyledSection>
      <Instruction isDark />
    </StyledSection>
  );
}

export default HowToDark;
