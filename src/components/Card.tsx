import React from "react";
import styled from "styled-components";
type CardProps = {
  children: any;
};
const CardStyled = styled.div``;
function Card(props: CardProps) {
  return (
    <div>
      <h1>{props.children.name}</h1>
      <img src={props.children.image} alt="" />
    </div>
  );
}

export default Card;
