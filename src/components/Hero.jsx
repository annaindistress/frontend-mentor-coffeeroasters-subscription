import styled from "styled-components";
import Title from "./Title";
import { BASE_URL } from "../constants";

const Hero = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 24px;
  width: calc(100% - 48px);
  max-width: 1280px;
  min-height: ${(props) =>
    props.$background === "coffeepress" ? "500px" : "400px"};
  margin-inline: auto;
  margin-bottom: 120px;
  padding: 100px 24px;
  text-align: center;
  color: hsl(var(--color-cream));
  background-color: hsl(var(--color-black));
  background-image: ${(props) =>
    `url("${BASE_URL}images/hero/${
      props.$background !== "" ? props.$background : "whitecup"
    }-mobile.jpg")`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: 10px;

  a {
    margin-top: 14px;
  }

  @media (width >= 768px) {
    width: calc(100% - 80px);
    margin-bottom: 150px;
    padding-inline: 58px;
    text-align: left;
    background-image: ${(props) =>
      `url("${BASE_URL}images/hero/${
        props.$background !== "" ? props.$background : "whitecup"
      }-tablet.jpg")`};

    a {
      margin-left: 0;
    }
  }

  @media (width >= 1280px) {
    gap: 32px;
    min-height: ${(props) =>
      props.$background === "coffeepress" ? "600px" : "450px"};
    margin-bottom: ${(props) =>
      props.$background === "coffeepress" ? "160px" : "168px"};
    padding-inline: 86px;
    background-image: ${(props) =>
      `url("${BASE_URL}images/hero/${
        props.$background !== "" ? props.$background : "whitecup"
      }-desktop.jpg")`};

    a {
      margin-top: 24px;
    }
  }
`;

const HeroTitle = styled(Title)`
  font-size: ${(props) => (props.$isMain ? "40px" : "28px")};
  line-height: 1;
  text-transform: ${(props) => (!props.$isMain ? "capitalize" : "none")};

  @media (width>= 768px) {
    font-size: ${(props) => (props.$isMain ? "48px" : "32px")};
    text-align: left;
  }

  @media (width >= 1280px) {
    font-size: ${(props) => (props.$isMain ? "72px" : "40px")};
  }
`;

const Text = styled.p`
  max-width: 398px;
  margin: 0 auto;
  line-height: 1.7;
  opacity: 0.8;

  @media (width >= 768px) {
    margin-left: 0;
  }
`;

Hero.Title = HeroTitle;
Hero.Text = Text;

export default Hero;
