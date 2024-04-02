import styled, { css } from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import Title from "./Title";
import { getOptions } from "./orderSlice.js";
import { orderData } from "../orderData.js";

const Container = styled.div`
  display: none;
  @media (width >= 1280px) {
    display: block;
    grid-auto-rows: max-content;
    grid-row: span 6;
  }
`;

const List = styled.ol`
  counter-reset: steps 0;

  @media (width >= 1280px) {
    position: sticky;
    top: 24px;
    display: grid;
    gap: 24px;
    margin: 0 0 144px;
    padding: 0;
    list-style: none;
  }
`;

const ListItem = styled.li`
  counter-increment: steps 1;
`;

const ListLink = styled(Title)`
  display: block;
  width: 100%;
  padding: 0 0 24px 0;
  text-decoration: none;
  text-transform: capitalize;
  text-align: left;
  color: inherit;
  background-color: transparent;
  border: 0;
  border-bottom: 1px solid hsla(var(--color-grey), 0.25);
  opacity: ${(props) => (props.$active ? "1" : "0.4")};
  outline: none;
  cursor: pointer;

  ${(props) =>
    props.$disabled &&
    css`
      pointer-events: none;
      user-select: none;
      opacity: 0.2;
    `}

  &::before {
    content: "0" counter(steps);
    margin-right: 26px;
    color: ${(props) => (props.$active ? "hsl(var(--color-cyan))" : "inherit")};
  }

  &:focus-visible {
    opacity: 0.6;
  }

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      opacity: 0.6;
    }
  }
`;

function OrderNavigation({ handleDropdowns }) {
  const location = useLocation();
  const currentId = location.hash.replace("#", "");
  const activeId = currentId === "" ? orderData.at(0).id : currentId;

  const { preferences } = useSelector(getOptions);

  return (
    <Container>
      <List>
        {orderData.map((item) => (
          <ListItem key={item.id}>
            <ListLink
              as={Link}
              to={`/create-plan#${item.id}`}
              $active={item.id === activeId}
              $disabled={preferences === "Capsule" && item.id === "grindOption"}
              onClick={() => handleDropdowns(item.id)}
            >
              {item.title}
            </ListLink>
          </ListItem>
        ))}
      </List>
    </Container>
  );
}

OrderNavigation.propTypes = {
  handleDropdowns: PropTypes.func,
};

export default OrderNavigation;
