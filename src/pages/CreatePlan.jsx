import PageAnimationWrapper from "../components/PageAnimationWrapper";
import Hero from "../components/Hero";
import HowToDark from "../components/HowToDark";

function CreatePlan() {
  return (
    <PageAnimationWrapper>
      <Hero $background="blackcup">
        <Hero.Title $isMain>Create a plan</Hero.Title>
        <Hero.Text>
          Build a subscription plan that best fits your needs. We offer an
          assortment of the best artisan coffees from around the globe delivered
          fresh to your door.
        </Hero.Text>
      </Hero>
      <HowToDark />
    </PageAnimationWrapper>
  );
}

export default CreatePlan;
