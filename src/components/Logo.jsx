import { Link } from "react-router-dom";
import styled from "styled-components";
import { BASE_URL } from "../constants";

const StyledLink = styled(Link)`
  display: block;
  width: 163px;
  outline: none;

  @media (width >= 768px) {
    width: 236px;
  }
`;

function Logo() {
  return (
    <StyledLink to="/">
      <img
        src={`${BASE_URL}images/logo.svg`}
        alt="Coffeeroasters' logo"
        width="163"
        height="18"
      />
    </StyledLink>
  );
}

export default Logo;
