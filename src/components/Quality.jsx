import styled from "styled-components";
import Section from "./Section";
import Title from "./Title";
import { BASE_URL } from "../constants";

const Container = styled.section`
  position: relative;
  margin-bottom: 120px;
  padding-top: 79px;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    display: block;
    width: calc(100% - 48px);
    max-width: 279px;
    height: 156px;
    background-image: ${`url("${BASE_URL}images/quality/mobile.jpg")`};
    background-repeat: no-repeat;
    background-size: 100% auto;
    border-radius: 8px;
  }

  @media (width >= 768px) {
    margin-bottom: 145px;
    padding-top: 160px;

    &::before {
      max-width: 573px;
      height: 320px;
      background-image: ${`url("${BASE_URL}images/quality/tablet.jpg")`};
    }
  }

  @media (width >= 1280px) {
    margin-bottom: 169px;
    padding-top: 88px;

    &::before {
      left: calc(50% + 110px);
      transform: translateX(0);
      max-width: 445px;
      height: 474px;
      background-image: ${`url("${BASE_URL}images/quality/desktop.jpg")`};
    }
  }
`;

const StyledSection = styled(Section)`
  padding-top: 142px;
  padding-bottom: 62px;

  @media (width >= 768px) {
    padding-top: 225px;
    padding-bottom: 66px;
  }

  @media (width >= 1280px) {
    padding-top: 88px;
    padding-left: 85px;
    padding-right: 656px;
    padding-bottom: 175px;
  }
`;

const QualityTitle = styled(Title)`
  margin-bottom: 24px;
  font-size: 28px;
  line-height: 1;

  @media (width >= 768px) {
    font-size: 32px;
    line-height: 1.5;
    text-align: center;
  }

  @media (width >= 1280px) {
    margin-bottom: 32px;
    font-size: 40px;
    line-height: 1.2;
    text-align: left;
  }
`;

const Text = styled.p`
  margin: 0;
  line-height: 1.67;
  text-align: center;

  @media (width >= 768px) {
    padding-inline: 2px;
  }

  @media (width >= 1280px) {
    padding: 0;
    font-size: 16px;
    line-height: 1.64;
    text-align: left;
  }
`;

function Quality() {
  return (
    <Container>
      <StyledSection as="div">
        <QualityTitle as="h2">Uncompromising quality</QualityTitle>
        <Text>
          Although we work with growers who pay close attention to all stages of
          harvest and processing, we employ, on our end, a rigorous quality
          control program to avoid over-roasting or baking the coffee dry. Every
          bag of coffee is tagged with a roast date and batch number. Our goal
          is to roast consistent, user-friendly coffee, so that brewing is easy
          and enjoyable.
        </Text>
      </StyledSection>
    </Container>
  );
}

export default Quality;
