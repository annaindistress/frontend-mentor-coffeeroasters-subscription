import styled from "styled-components";
import PropTypes from "prop-types";
import NavigationButton from "./NavigationButton";
import NavigationLink from "./NavigationLink";

const List = styled.ul`
  display: flex;
  align-items: center;
  gap: 32px;
  margin: 0;
  padding: 0;
  list-style: none;

  @media (width < 768px) {
    position: absolute;
    top: 99%;
    left: 0;
    right: 0;
    display: ${(props) => (props.$isOpen ? "flex" : "none")};
    flex-direction: column;
    height: calc(100vh - 82px);
    padding: 80px 0;
    background-image: linear-gradient(
      to top,
      hsla(var(--color-cream), 0.504981) 0%,
      hsl(var(--color-cream)) 55.94%
    );
  }

  @media (width >= 768px) {
    justify-content: flex-end;
    gap: 32px;
  }
`;

function Navigation({ isOpen, setIsOpen }) {
  return (
    <nav>
      <NavigationButton
        type="button"
        $isOpen={isOpen}
        onClick={() => setIsOpen((state) => !state)}
      >
        {isOpen ? "Close menu" : "Open menu 1"}
      </NavigationButton>
      <List $isOpen={isOpen}>
        <li>
          <NavigationLink to="/">Home</NavigationLink>
        </li>
        <li>
          <NavigationLink to="/about">About us</NavigationLink>
        </li>
        <li>
          <NavigationLink to="/create-plan">Create your plan</NavigationLink>
        </li>
      </List>
    </nav>
  );
}

Navigation.propTypes = {
  isOpen: PropTypes.bool,
  setIsOpen: PropTypes.func,
};

export default Navigation;
