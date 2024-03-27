import styled from "styled-components";
import PropTypes from "prop-types";
import Logo from "./Logo";
import Navigation from "./Navigation";

const StyledHeader = styled.header`
  position: ${(props) => (props.$isOpenMenu ? "fixed" : "static")};
  top: 0;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 32px;
  width: 100%;
  margin: 0 auto 8px;
  padding: 32px 24px;
  background-color: hsl(var(--color-cream));

  @media (width >= 768px) {
    position: static;
    margin-bottom: 13px;
    padding: 40px;
  }

  @media (width >= 1280px) {
    max-width: 1360px;
  }
`;

function Header({ isOpenMenu, setIsOpenMenu }) {
  return (
    <StyledHeader $isOpenMenu={isOpenMenu}>
      <Logo />
      <Navigation isOpen={isOpenMenu} setIsOpen={setIsOpenMenu} />
    </StyledHeader>
  );
}

Header.propTypes = {
  isOpenMenu: PropTypes.bool,
  setIsOpenMenu: PropTypes.func,
};

export default Header;
