import React from "react";
import styled from "@emotion/styled";

const StyledForm = styled.form`
  width: 80%;
  font-family: sans-serif;
  font-size: 20px;
  color: #ffffff;
  border-radius: 10px;
  padding: 10px;
  background: linear-gradient(
    90deg,
    hsla(337, 100%, 50%, 1) 5%,
    hsla(45, 100%, 69%, 1) 100%
  );
`;

export const Form = (props) => {
  return (
    <>
      <StyledForm onSubmit={props.onSubmit}> {props.children}</StyledForm>
    </>
  );
};
