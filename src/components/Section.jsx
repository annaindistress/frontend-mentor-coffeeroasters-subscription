import styled from "styled-components";

const Section = styled.section`
  width: calc(100% - 48px);
  max-width: 1280px;
  margin-inline: auto;
  padding: 64px 24px;
  color: hsl(var(--color-cream));
  background-color: hsl(var(--color-black));
  border-radius: 10px;

  @media (width >= 768px) {
    width: calc(100% - 80px);
    padding: 56px 74px;
  }

  @media (width >= 1280px) {
    padding-block: 100px;
  }
`;

export default Section;
