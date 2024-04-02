import { useEffect } from "react";
import { createPortal } from "react-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import PropTypes from "prop-types";
import Title from "./Title";
import Summary from "./Summary";
import Button from "./Button";
import { clear, getFinalPrice } from "./orderSlice";

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: hsla(0, 0%, 0%, 50%);
  backdrop-filter: blur(4px);
  z-index: 1000;
  transition: all 0.5s;
`;

const StyledModal = styled.div`
  position: fixed;
  inset: 35px 24px;
  display: grid;
  grid-template-rows: max-content 1fr max-content;
  width: calc(100% - 48px);
  max-width: 540px;
  height: calc(100% - 70px);
  max-height: 597px;
  margin: auto;
  background-color: hsl(var(--color-cream));
  border-radius: 8px;
  overflow: hidden;
`;

const Heading = styled(Title)`
  padding: 28px 24px;
  font-size: 28px;
  line-height: 1.14;
  text-transform: capitalize;
  text-align: left;
  color: hsl(var(--color-cream));
  background-color: hsl(var(--color-black));

  @media (width >= 768px) {
    padding: 48px 56px 40px;
    font-size: 40px;
    line-height: 1.2;
  }
`;

const Content = styled.div`
  display: grid;
  grid-template-rows: max-content 1fr max-content;
  padding: 40px 24px 0;
  color: hsl(var(--color-grey));
  overflow: auto;

  @media (width >= 768px) {
    padding: 58px 56px 0;
  }
`;

const Info = styled.p`
  margin: 0;
  line-height: 1.67;
  color: hsl(var(--color-black));
  opacity: 0.8;

  @media (width >= 768px) {
    margin-top: 6px;
    font-size: 16px;
    line-height: 1.62;
  }
`;

const Checkout = styled.div`
  padding: 24px;
  text-align: center;

  @media (width >= 768px) {
    display: grid;
    grid-template-columns: 1fr max-content;
    align-items: center;
    padding: 24px 56px 56px;
  }
`;

const Price = styled(Title)`
  display: block;
  margin-bottom: 8px;

  @media (width >= 375px) {
    display: none;
  }

  @media (width >= 768px) {
    display: block;
    margin-bottom: 0;
    font-size: 32px;
    line-height: 1.13;
  }

  @media (width >= 1280px) {
    text-align: left;
  }
`;

const ButtonPrice = styled.span`
  display: none;

  @media (width >= 375px) {
    display: inline;
  }

  @media (width >= 768px) {
    display: none;
  }
`;

function Modal({ isOpen, setIsOpen }) {
  const finalPrice = useSelector(getFinalPrice);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSubmit() {
    setIsOpen(false);
    dispatch(clear());
    navigate("/");
  }

  useEffect(
    function () {
      function handleEscape(event) {
        if (event.key === "Escape") {
          setIsOpen(false);
        }
      }

      document.addEventListener("keydown", handleEscape);
      return () => document.removeEventListener("keydown", handleEscape);
    },
    [setIsOpen]
  );

  if (!isOpen) return null;

  return createPortal(
    <Overlay>
      <StyledModal>
        <Heading as="p">Order summary</Heading>
        <Content>
          <Summary />
          <Info>
            Is this correct? You can proceed to checkout or go back to plan
            selection if something is off. Subscription discount codes can also
            be redeemed at the checkout.
          </Info>
        </Content>
        <Checkout>
          <Price as="span">${finalPrice.toFixed(2)} / mo</Price>
          <Button as="button" type="button" onClick={handleSubmit}>
            Checkout<ButtonPrice> - ${finalPrice.toFixed(2)} / mo</ButtonPrice>
          </Button>
        </Checkout>
      </StyledModal>
    </Overlay>,
    document.body
  );
}

Modal.propTypes = {
  isOpen: PropTypes.bool,
  setIsOpen: PropTypes.func,
};

export default Modal;
