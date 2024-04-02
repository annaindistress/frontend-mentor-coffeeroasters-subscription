import styled from "styled-components";
import Facebook from "../assets/facebook.svg?react";
import Twitter from "../assets/twitter.svg?react";
import Instagram from "../assets/instagram.svg?react";

const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, max-content);
  justify-content: center;
  align-items: center;
  gap: 24px;
  margin: 0;
  padding: 0;
  list-style: none;
`;

const Link = styled.a`
  display: flex;
  align-items: center;
  width: 24px;
  height: 24px;
  color: hsl(var(--color-cream));

  svg {
    display: block;
  }

  &:focus-visible {
    color: hsl(var(--color-orange));
  }

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      color: hsl(var(--color-orange));
    }
  }
`;

function Social() {
  return (
    <List>
      <li>
        <Link href="http://facebook.com" target="_blank">
          <Facebook />
        </Link>
      </li>
      <li>
        <Link href="http://twitter.com" target="_blank">
          <Twitter />
        </Link>
      </li>
      <li>
        <Link href="http://instagram.com" target="_blank">
          <Instagram />
        </Link>
      </li>
    </List>
  );
}

export default Social;
