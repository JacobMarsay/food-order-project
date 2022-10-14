import React, { useRef, useState } from "react";
import styled from "styled-components";

// IMPORT COMPONENT
import Input from "../../UI/Input";

function MealItemForm(props) {
  const amountInputRef = useRef();

  // STATE
  const [amountIsValid, setAmountIsValid] = useState(true);

  const submitHandler = (event) => {
    event.preventDefault();

    // 'CURRENT.VALUE' IS ALWAYS RETURNED AS STRING
    const enteredAmount = amountInputRef.current.value;
    // CONVERT STRING TO NUMBER
    const convertAmount = +enteredAmount;

    // VALIDATION
    if (
      enteredAmount.trim().length === 0 ||
      convertAmount < 1 ||
      convertAmount > 5
    ) {
      setAmountIsValid(false);
      return;
    }
    props.onAddToCart(convertAmount);
  };
  return (
    <FormElement onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!amountIsValid && (
        <div>
          <p>The amount you have entered is invalid</p>
          <p>Amount should be 1 or more and less than 5</p>
        </div>
      )}
    </FormElement>
  );
}

export default MealItemForm;

const FormElement = styled.form`
  text-align: right;

  button {
    font: inherit;
    cursor: pointer;
    background-color: #8a2b06;
    border: 1px solid #8a2b06;
    color: white;
    padding: 0.25rem 2rem;
    border-radius: 20px;
    font-weight: bold;

    &:hover,
    &:active {
      background-color: #641e03;
      border-color: #641e03;
    }
  }
`;
