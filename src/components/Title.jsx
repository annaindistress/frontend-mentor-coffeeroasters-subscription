import styled from "styled-components";

const Title = styled.h1`
  margin-block: 0;
  font-family: var(--font-fancy);
  font-weight: 900;
  font-size: 24px;
  line-height: 1.34;
  text-align: center;

  @media (width >= 768px) {
    text-align: left;
  }

  @media (width >= 1280px) {
    text-align: center;
  }
`;

export default Title;
