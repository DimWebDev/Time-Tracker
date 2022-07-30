import React from "react";
import styled from "@emotion/styled";

const StyledTable = styled.table`
  margin-top: 20px;
  border: solid;
  border-collapse: collapse;
  min-width: 80%;
  & td {
    border: solid;
    padding: 20px;
  }
`;

export const Table = (props) => {
  return (
    <>
      <h2>This Table shows the results of your working time.</h2>
      {props.hours && (
        <StyledTable>
          <tr>
            <td>Monthly: {props.hours}</td>
            <td>Weekly: {props.hours}</td>
            <td>Daily: {props.hours}</td>
          </tr>
        </StyledTable>
      )}
      {!props.hours && (
        <StyledTable>
          <tr>
            <td>Monthly: </td>
            <td>Weekly: </td>
            <td>Daily: </td>
          </tr>
        </StyledTable>
      )}
      {!props.editedHours && (
        <StyledTable>
          <h2>Edited Table Data</h2>
          <tr>
            <td>Monthly: {props.editedHours}</td>
            <td>Weekly: {props.editedHours}</td>
            <td>Daily: {props.editedHours}</td>
          </tr>
        </StyledTable>
      )}
      {props.editedHours > 1 && (
        <StyledTable>
          <h2>Edited Table Data</h2>
          <tr>
            <td>Monthly: {props.editedHours}</td>
            <td>Weekly: {props.editedHours}</td>
            <td>Daily: {props.editedHours}</td>
          </tr>
        </StyledTable>
      )}
    </>
  );
};
