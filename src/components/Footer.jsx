import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Logo from "./Logo";
import Social from "./Social";

const StyledFooter = styled.footer`
  display: grid;
  gap: 46px;
  width: calc(100% - 48px);
  max-width: 1280px;
  margin-inline: auto;
  margin-bottom: 72px;
  padding: 54px;
  color: hsl(var(--color-cream));
  background-color: hsl(var(--color-black));

  @media (width >= 768px) {
    width: calc(100% - 80px);
    gap: 29px;
  }

  @media (width >= 1280px) {
    grid-template-columns: max-content 1fr max-content;
    margin-bottom: 88px;
    padding: 46px 85px 47px;
  }
`;

const List = styled.ul`
  display: grid;
  gap: 21px;
  margin: 0 0 2px;
  padding: 0;
  text-align: center;
  list-style: none;

  @media (width >= 768px) {
    grid-template-columns: repeat(3, max-content);
    justify-content: center;
    gap: 32px;
    margin-bottom: 36px;
    padding-left: 25px;
  }

  @media (width >= 1280px) {
    justify-content: start;
    margin-bottom: 0;
    padding-top: 4px;
    padding-left: 74px;
  }
`;

const Link = styled(NavLink)`
  font-weight: 700;
  font-size: 12px;
  line-height: 1.25;
  letter-spacing: 0.9px;
  text-transform: uppercase;
  text-decoration: none;
  color: hsl(var(--color-grey));
  outline: none;

  &:focus-visible {
    color: hsl(var(--color-cream));
  }

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      color: hsl(var(--color-cream));
    }
  }
`;

function Footer() {
  return (
    <StyledFooter>
      <Logo isFooter />
      <List>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About us</Link>
        </li>
        <li>
          <Link to="/create-plan">Create your plan</Link>
        </li>
      </List>
      <Social />
    </StyledFooter>
  );
}

export default Footer;
