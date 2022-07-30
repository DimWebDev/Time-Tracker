import React from "react";
import { useState } from "react";
import styled from "@emotion/styled";
import { Container } from "../Containers/Container";
import { Table } from "../Table/Table";
import { Form } from "../Form/Form";

export const StyledButton = styled.button`
  width: 200px;
  height: 100px;
  margin: 10px;
  color: #0061ff;
  font-size: 16px;

  background: linear-gradient(
    270deg,
    hsla(144, 100%, 69%, 1) 0%,
    hsla(71, 100%, 68%, 1) 100%
  );
  border: none;
  border-radius: 15px;
  cursor: pointer;
`;

const DataArray = [];

export const TimeTracker = () => {
  const [date, setDate] = useState("");
  const [endDate, setLastDate] = useState("");

  const [useSelectedDate, setSelectedDate] = useState("");
  const [userSelectedEndDate, setSelectedEndEndDate] = useState("");

  const [hours, setHours] = useState("");
  const [userSelectedHours, setUserSelectedHours] = useState("");

  const StartDateTime = () => setDate(new Date().getTime());
  const EndLastDate = () => setLastDate(new Date().getTime());

  const Calculate = () => {
    const DataObject = {
      date,
      endDate,
    };
    DataArray.push(DataObject);
    console.log(DataArray);
  };

  const ShowUserSelectedTotalHOurs = () => {
    let sum = 0;
    const a = new Date(useSelectedDate); // take this from input
    const b = new Date(userSelectedEndDate); // take this from input ui

    for (let x of DataArray) {
      if (x.date >= a && x.endDate <= b) sum += x.endDate - x.date;
    }
    const seconds = sum / 1000;

    setUserSelectedHours(seconds / 3600);
  };

  const ShowTotalHours = () => {
    const Date1 = new Date(date);
    const Date2 = new Date();
    const timeDifference = Date2.getTime() - Date1.getTime();
    const seconds = timeDifference / 1000;

    setHours(seconds / 3600);
    console.log(hours);
  };

  const HandleUserStartDate = (event) => {
    setSelectedDate(event.target.value);
    console.log(useSelectedDate);
  };
  const HandleUserEndDate = (event) => {
    setSelectedEndEndDate(event.target.value);
    console.log(userSelectedEndDate);
  };

  const ResetForm = () => {
    setUserSelectedHours(null);
    setHours(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <Form onSubmit={handleSubmit}>
      <h1>Start tracking how much time you are working</h1>
      <Container type="first">
        <StyledButton onClick={StartDateTime}>
          CLick here to start time tracking!
        </StyledButton>
        <StyledButton onClick={EndLastDate}>
          CLick here to finish time tracking!
        </StyledButton>

        <StyledButton onClick={Calculate}>Calculate</StyledButton>
        <StyledButton onClick={ShowTotalHours}>
          Add Total Hours Sum to the table
        </StyledButton>
        <br />
      </Container>
      <h1>Edit the data of your working time manually</h1>
      <Container type="second">
        <h3>Add a start date manually</h3>
        <input type="date" onChange={HandleUserStartDate}></input>
        <h3>Add an end date manually</h3>
        <input type="date" onChange={HandleUserEndDate}></input>
        <br />
        <StyledButton onClick={ShowUserSelectedTotalHOurs}>
          Add Edited Total Hours Sum to the table: {userSelectedHours}
        </StyledButton>
        <br />
      </Container>

      <Table hours={hours} editedHours={userSelectedHours} />
      <StyledButton onClick={ResetForm}>Delete Form</StyledButton>
    </Form>
  );
};
