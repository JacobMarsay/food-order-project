import React, { useReducer } from "react";
import CardContext from "./cart-context";

// A card provider component to manage the card context data and to provide context to all components that needs access to the 'CardConext' component
// Reducer has been chosen to manage this state because this state is more complex
// Check if meal is part of a cart or not, etc.

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedTotalAmount =
      state.totalAmount + action.payload.price * action.payload.amount;

    // CHECKING FOR AN EXISTING ITEM
    // finding if the item id in the array is the same as the id that has just been added
    const exitstingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.payload.id
    );
    // GETS THE ITEM THAT ALREADY EXISTS BY ACCESSING THE ARRAY INDEX
    const existingCartItem = state.items[exitstingCartItemIndex];
    let updatedItems;

    // CHECK IF 'existingCartItem' IS PART OF THE ARRAY
    // IF TRUE
    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.payload.amount,
      };
      updatedItems = [...state.items];
      updatedItems[exitstingCartItemIndex] = updatedItem;
    } else {
      //'concat()' RETURN A NEW ARRAY RATHER THAN ADDING IT TO THE 'items' array
      updatedItems = state.items.concat(action.payload);
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  if (action.type === "REMOVE") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );

    const existingItem = state.items[existingCartItemIndex];
    // SUBTRACT THE ITEM PRICE FROM THE TOTAL AMOUNT
    const updatedTotalAmount = state.totalAmount - existingItem.price;
    let updatedItems;
    // REMOVING THE ITEM WHEN THE AMOUNT IS 1
    if (existingItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      // SUBTRACT THE AMOUNT BY 1
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  return defaultCartState;
};

function CartProvider(props) {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );
  // LOGIC
  const addItemCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", payload: item });
  };
  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemCartHandler,
    removeItem: removeItemFromCartHandler,
  };
  return (
    <CardContext.Provider value={cartContext}>
      {props.children}
    </CardContext.Provider>
  );
}

export default CartProvider;
