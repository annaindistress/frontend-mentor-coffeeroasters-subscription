import styled from "styled-components";
import Title from "./Title";
import { BASE_URL } from "../constants";

const Section = styled.section`
  width: calc(100% - 48px);
  max-width: 1110px;
  margin-inline: auto;
  margin-bottom: 118px;

  &::before {
    content: "";
    display: block;
    width: 100%;
    max-width: 327px;
    height: 400px;
    margin-inline: auto;
    margin-bottom: 48px;
    background-image: ${`url("${BASE_URL}images/commitment/mobile.jpg")`};
    background-repeat: no-repeat;
    background-size: 100% auto;
    border-radius: 8px;
  }

  @media (width >= 768px) {
    display: grid;
    grid-template-columns: 281px 1fr;
    gap: 0 68px;
    width: calc(100% - 80px);
    margin-bottom: 144px;

    &::before {
      grid-row: 1 / span 3;
      max-width: 100%;
      height: 470px;
      margin-bottom: 0;
      background-image: ${`url("${BASE_URL}images/commitment/tablet.jpg")`};
      background-position-x: -1px;
    }
  }

  @media (width >= 1280px) {
    grid-template-columns: 445px 1fr;
    gap: 0 125px;
    margin-bottom: 256px;

    &::before {
      height: 520px;
      background-image: ${`url("${BASE_URL}images/commitment/desktop.jpg")`};
      background-position-x: 0;
    }
  }
`;

const MissionTitle = styled(Title)`
  margin-bottom: 30px;
  font-size: 32px;
  line-height: 1.5;

  @media (width >= 768px) {
    padding-top: 9px;
  }

  @media (width >= 1280px) {
    padding-top: 90px;
    font-size: 40px;
    line-height: 1.2;
    text-align: left;
  }
`;

const Text = styled.p`
  margin: 0;
  padding-inline: 2px;
  line-height: 1.67;
  text-align: center;

  @media (width >= 768px) {
    padding-inline: 0;
    text-align: left;
  }

  @media (width >= 1280px) {
    padding-right: 2px;
    font-size: 16px;
    line-height: 1.64;
  }
`;

function Mission() {
  return (
    <Section>
      <MissionTitle>Our commitment</MissionTitle>
      <Text>
        We’re built on a simple mission and a commitment to doing good along the
        way. We want to make it easy for you to discover and brew the world’s
        best coffee at home. It all starts at the source. To locate the specific
        lots we want to purchase, we travel nearly 60 days a year trying to
        understand the challenges and opportunities in each of these places. We
        collaborate with exceptional coffee growers and empower a global
        community of farmers through with well above fair-trade benchmarks. We
        also offer training, support farm community initiatives, and invest in
        coffee plant science. Curating only the finest blends, we roast each lot
        to highlight tasting profiles distinctive to their native growing
        region.
      </Text>
    </Section>
  );
}

export default Mission;
