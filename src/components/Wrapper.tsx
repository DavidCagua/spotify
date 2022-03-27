import React from "react";
import styled from "styled-components";

type WrapperProps = {
  children: React.ReactNode;
};
const WrapperStyled = styled.div`
  max-width: 1280px;
  margin: auto;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function Wrapper({ children }: WrapperProps) {
  return <WrapperStyled>{children}</WrapperStyled>;
}

export default Wrapper;
