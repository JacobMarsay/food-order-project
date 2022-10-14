import React, { useContext } from "react";
import styled from "styled-components";

// IMPORT COMPONENT
import MealItemForm from "./MealItemForm";
import CartContext from "../../../store/cart-context";

function MealItem(props) {
  const cartCtx = useContext(CartContext);
  const price = `£${props.price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };
  return (
    <li>
      <MealItemContainer>
        <MealContentContainer>
          <h3>{props.name}</h3>
          <MealDescriptionContainer>
            <p>{props.description}</p>
          </MealDescriptionContainer>
          <MealPriceContainer>
            <p>{price}</p>
          </MealPriceContainer>
        </MealContentContainer>
        <FormContainer>
          <MealItemForm onAddToCart={addToCartHandler} id={props.id} />
        </FormContainer>
      </MealItemContainer>
    </li>
  );
}

export default MealItem;

const MealItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #ccc;

  h3 {
    margin: 0 0 0.25rem 0;
  }
`;

const MealContentContainer = styled.div`
  display: block;
`;
const MealDescriptionContainer = styled.div`
  font-style: italic;
`;

const MealPriceContainer = styled.div`
  margin-top: 0.25rem;
  font-weight: bold;
  color: #ad5502;
  font-size: 1.25rem;
`;

const FormContainer = styled.div``;
