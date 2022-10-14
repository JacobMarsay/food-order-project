import React from "react";
import styled from "styled-components";

function Card(props) {
  return <CardContainer>{[props.children]}</CardContainer>;
}

export default Card;

const CardContainer = styled.div`
  padding: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  border-radius: 14px;
  background-color: white;
`;
