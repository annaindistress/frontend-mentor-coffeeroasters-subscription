import { Link } from "react-router-dom";
import styled from "styled-components";

const Button = styled(Link)`
  display: inline-block;
  width: max-content;
  min-width: 217px;
  margin-inline: auto;
  padding: 15px 31px 16px;
  font-family: var(--font-fancy);
  font-weight: 900;
  font-size: 18px;
  line-height: 1.4;
  text-align: center;
  text-decoration: none;
  color: hsl(var(--color-cream));
  background-color: hsl(var(--color-cyan));
  border: 0;
  border-radius: 6px;
  outline: none;
  cursor: pointer;

  &:disabled {
    background-color: hsl(var(--color-grey-light));
  }

  &:focus-visible {
    background-color: hsl(var(--color-cyan-hover));
  }

  @media (hover: hover) and (pointer: fine) {
    &:hover:not(:disabled) {
      background-color: hsl(var(--color-cyan-hover));
    }
  }
`;

export default Button;
