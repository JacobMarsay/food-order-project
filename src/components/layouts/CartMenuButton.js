import React, { useContext } from "react";
import styled from "styled-components";

// IMPORT COMPONENT
import CartIcon from "./CartIcon";
import CartContext from "../../store/cart-context";

function CartMenuButton(props) {
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);
  return (
    <React.Fragment>
      <CartButtonContainer className="bump">
        <button onClick={props.onClick}>
          <span className="icon">
            <CartIcon />
          </span>
          <span>Your Cart</span>
          <span className="badge">{numberOfCartItems}</span>
        </button>
      </CartButtonContainer>
    </React.Fragment>
  );
}

export default CartMenuButton;

const CartButtonContainer = styled.div`
  button {
    cursor: pointer;
    font: inherit;
    border: none;
    background-color: #4d1601;
    color: white;
    padding: 0.75rem 3rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-radius: 25px;
    font-weight: bold;
    &:hover,
    &:active {
      background-color: #2c0d00;
    }
    .icon {
      width: 1.35rem;
      height: 1.35rem;
      margin-right: 0.5rem;
    }

    .badge {
      background-color: #b94517;
      padding: 0.25rem 1rem;
      border-radius: 25px;
      margin-left: 1rem;
      font-weight: bold;
    }
  }

  .bump {
    animation: bump 300ms ease-out;
  }

  @keyframes bump {
    0% {
      transform: scale(1);
    }
    10% {
      transform: scale(0.9);
    }
    30% {
      transform: scale(1.1);
    }
    50% {
      transform: scale(1.15);
    }
    100% {
      transform: scale(1);
    }
  }
`;
