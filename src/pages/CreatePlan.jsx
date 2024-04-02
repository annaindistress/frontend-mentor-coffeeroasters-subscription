import { useState } from "react";
import PageAnimationWrapper from "../components/PageAnimationWrapper";
import Hero from "../components/Hero";
import HowToDark from "../components/HowToDark";
import Order from "../components/Order";
import Modal from "../components/Modal";

function CreatePlan() {
  const [isOpenModal, setIsOpenModal] = useState(false);

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
      <Order setIsOpenModal={setIsOpenModal} />
      <Modal isOpen={isOpenModal} setIsOpen={setIsOpenModal} />
    </PageAnimationWrapper>
  );
}

export default CreatePlan;
