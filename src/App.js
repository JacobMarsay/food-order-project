import React, { useState } from "react";

//IMPORTED COMPONENT
import Header from "./components/layouts/Header";
import Meals from "./components/meals/Meals";
import Cart from "./components/cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartDisplayed, setCartIsDisplayed] = useState(false);

  //HANDLERS
  const cartClosedHandler = () => {
    setCartIsDisplayed(false);
  };

  const cartShownHandler = () => {
    setCartIsDisplayed(true);
  };

  return (
    <CartProvider>
      {cartDisplayed && <Cart onClosedCart={cartClosedHandler} />}
      <Header onOpenCart={cartShownHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
