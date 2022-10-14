import React, { useContext } from "react";
import styled from "styled-components";

// IMPORT COMPONENTS
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

function Cart(props) {
  const cartCtx = useContext(CartContext);
  const totalAmount = `£${cartCtx.totalAmount.toFixed(2)}`;
  const hasitems = cartCtx.length > 0;
  console.log(totalAmount);

  // handlers
  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const cartItems = (
    <CartItemElement>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </CartItemElement>
  );
  return (
    <Modal onClose={props.onClosedCart}>
      {cartItems}
      <TotalAmountContainer>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </TotalAmountContainer>
      <ActionsContainer>
        <ActionElement onClick={props.onClosedCart} className="close">
          Close
        </ActionElement>
        {hasitems && (
          <ActionElement className="checkout">Checkout</ActionElement>
        )}
      </ActionsContainer>
    </Modal>
  );
}

export default Cart;

const CartItemElement = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  max-height: 20rem;
  overflow: scroll;
`;

const TotalAmountContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  font-size: 1.5rem;
  margin: 1rem 0;
`;

const ActionsContainer = styled.div`
  text-align: right;
  .close {
    color: #8a2b06;
  }

  .checkout {
    background-color: #8a2b06;
    color: white;
  }
`;

const ActionElement = styled.button`
  font: inherit;
  cursor: pointer;
  background-color: transparent;
  border: 1px solid #8a2b06;
  padding: 0.5rem 2rem;
  border-radius: 25px;
  margin-left: 1rem;

  &:hover,
  &:active {
    background-color: #5a1a01;
    border-color: #5a1a01;
    color: white;
  }
`;
