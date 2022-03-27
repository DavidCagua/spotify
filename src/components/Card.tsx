import React from "react";
import styled from "styled-components";
type CardProps = {
  children: any;
};
const CardStyled = styled.div`
  cursor: pointer;
  &:hover .details {
    border: 1px solid red;
    border-top: none;
    border-radius: 0 0 5px 5px;
  }
  text-align: left;
  border-radius: 5px;
  box-shadow: 0 0 7px 2px rgba(255, 255, 255, 0.03);
  img {
    width: 100%;
    border-radius: 5px 5px 0 0;
    vertical-align: top;
  }
  .details {
    padding: 1.5em;
    border: 1px solid transparent;
    border-top: none;
    transition: 0.3s border;
    background: var(--black);
  }
  h2 {
    margin: 0;
    margin-bottom: 1rem;
    font-size: 18px;
    font-weight: 700;
  }
  p {
    font-size: 0.8em;
    margin-bottom: 0.5rem;
  }
`;
function Card(props: CardProps) {
  return (
    <CardStyled>
      <div>
        <img src={props.children.image} alt="" />
        <h2>{props.children.name}</h2>
      </div>
    </CardStyled>
  );
}

export default Card;
