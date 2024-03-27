import Hero from "../components/Hero";

function CreatePlan() {
  return (
    <>
      <Hero $background="blackcup">
        <Hero.Title $isMain>Create a plan</Hero.Title>
        <Hero.Text>
          Build a subscription plan that best fits your needs. We offer an
          assortment of the best artisan coffees from around the globe delivered
          fresh to your door.
        </Hero.Text>
      </Hero>
    </>
  );
}

export default CreatePlan;
