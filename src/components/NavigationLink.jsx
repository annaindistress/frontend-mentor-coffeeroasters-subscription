import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavigationLink = styled(NavLink)`
  line-height: 1.3;
  text-decoration: none;
  color: inherit;
  outline: none;

  &:focus {
    color: hsl(var(--color-black));
  }

  @media (width < 768px) {
    font-family: var(--font-fancy);
    font-weight: 900;
    font-size: 24px;
    text-transform: capitalize;
  }

  @media (width >= 768px) {
    font-weight: 700;
    font-size: 14px;
    text-transform: uppercase;
    color: hsl(var(--color-grey));
  }

  @media (width >= 1280px) {
    font-size: 13px;
  }

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      color: hsl(var(--color-black));
    }
  }
`;

export default NavigationLink;
