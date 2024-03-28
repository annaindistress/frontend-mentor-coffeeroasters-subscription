import { Link } from "react-router-dom";
import styled from "styled-components";
import PropTypes from "prop-types";
import { BASE_URL } from "../constants";

const StyledLink = styled(Link)`
  display: block;
  width: ${(props) => (props.$footer ? "218px" : "163px")};
  max-width: 100%;
  margin-inline: ${(props) => (props.$footer ? "auto" : "initial")};
  outline: none;

  @media (width >= 768px) {
    width: 236px;
  }

  @media (width >= 1280px) {
    margin-left: 0;
  }
`;

function Logo({ isFooter }) {
  return (
    <StyledLink $footer={isFooter}>
      <img
        src={`${BASE_URL}images/logo${isFooter ? "-footer" : ""}.svg`}
        alt="Coffeeroasters' logo"
        width="163"
        height="18"
      />
    </StyledLink>
  );
}

Logo.propTypes = {
  isFooter: PropTypes.bool,
};

export default Logo;
