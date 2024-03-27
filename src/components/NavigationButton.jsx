import styled from "styled-components";
import { BASE_URL } from "../constants";

const NavigationButton = styled.button`
  display: block;
  width: 16px;
  height: 16px;
  font-size: 0;
  background-color: transparent;
  background-image: ${(props) =>
    `url("${BASE_URL}/images/icons/${
      props.isOpen ? "close" : "hamburger"
    }.svg")`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: auto;
  border: 0;
  outline: none;

  @media (width >= 768px) {
    display: none;
  }
`;

export default NavigationButton;
