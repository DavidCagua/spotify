import React from "react";
import styled from "styled-components";
import { filterReducer } from "../store/actionCreators";
import { Dispatch } from "redux";
import { useDispatch } from "react-redux";

type ButtonProps = {
  children: string;
};
const ButtonStyled = styled.div`
  button {
    cursor: pointer;
    background: var(--green);
    color: white;
    border-radius: 10px;
    border: 1px solid var(--white);
    margin: 20px 10px;
    padding: 5px;
  }
  &:hover button {
    background-color: var(--white);
    color: var(--green);
  }
`;
function Button({ children }: ButtonProps) {
  const dispatch: Dispatch<any> = useDispatch();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const criteria: any = {
      "Mejores resultados": "bestMatch",
      Artista: "artist",
      Album: "album",
      Cancion: "song",
      Historial: "history",
    };
    dispatch(filterReducer(criteria[children]));
  };
  return (
    <ButtonStyled>
      <button onClick={handleClick}>{children}</button>
    </ButtonStyled>
  );
}

export default Button;
