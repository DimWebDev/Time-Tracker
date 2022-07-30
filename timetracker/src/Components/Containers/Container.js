import React from "react";
import styled from "@emotion/styled";

const StyledContainer = styled.div`
  background: linear-gradient(
    -90deg,
    hsla(337, 100%, 50%, 1) 5%,
    hsla(45, 100%, 69%, 1) 100%
  );
  width: 80%;
  margin-top: 50px;
  margin-bottom: 100px;
  padding: 50px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  border: solid 1px #5cdab1;
  border-radius: 15px;
`;

const SecondStyledContainer = styled.div`
  background: linear-gradient(
    -90deg,
    hsla(337, 100%, 50%, 1) 5%,
    hsla(45, 100%, 69%, 1) 100%
  );
  width: 80%;
  padding: 20px;
  margin-top: 50px;
  border-radius: 15px;
  border: solid 1px #5cdab1;
`;

export const Container = (props) => {
  const ContainerType =
    props.type === "first" ? StyledContainer : SecondStyledContainer;
  return <ContainerType>{props.children}</ContainerType>;
};
