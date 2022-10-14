import React from "react";

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  //REMOVE ITEM BASED ON ID
  removeItem: (id) => {},
});

export default CartContext;
