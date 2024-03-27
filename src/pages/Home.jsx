import PageAnimationWrapper from "../components/PageAnimationWrapper";
import Hero from "../components/Hero";
import Button from "../components/Button";

function Home() {
  return (
    <PageAnimationWrapper>
      <Hero $background="coffeepress">
        <Hero.Title $isMain>
          Great coffee
          <br />
          made simple.
        </Hero.Title>
        <Hero.Text>
          Start your mornings with the world’s best coffees. Try our expertly
          curated artisan coffees from our best roasters delivered directly to
          your door, at your schedule.
        </Hero.Text>
        <Button to="/create-plan">Create your plan</Button>
      </Hero>
    </PageAnimationWrapper>
  );
}

export default Home;
