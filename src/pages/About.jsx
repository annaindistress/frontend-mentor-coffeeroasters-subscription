import PageAnimationWrapper from "../components/PageAnimationWrapper";
import Hero from "../components/Hero";
import Mission from "../components/Mission";
import Quality from "../components/Quality";

function About() {
  return (
    <PageAnimationWrapper>
      <Hero $background="">
        <Hero.Title>About us</Hero.Title>
        <Hero.Text>
          Coffeeroasters began its journey of exotic discovery in 1999,
          highlighting stories of coffee from around the world. We have since
          been dedicated to bring the perfect cup - from bean to brew - in every
          shipment.
        </Hero.Text>
      </Hero>
      <Mission />
      <Quality />
    </PageAnimationWrapper>
  );
}

export default About;
