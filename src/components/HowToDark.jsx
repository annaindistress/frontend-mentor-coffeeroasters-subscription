import styled from "styled-components";
import Section from "./Section";
import Instruction from "./Instruction";

const StyledSection = styled(Section)`
  width: 100%;
  margin-bottom: 120px;
  padding-top: 85px;
  padding-bottom: 80px;

  @media (width >= 768px) {
    padding: 97px 40px 74px;
  }

  @media (width >= 1280px) {
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
