import React, { useState } from "react";
import Card from "../UI/Card";
import styles from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const [enteredUsername, setenteredUsername] = useState("");
  const [enteredAge, setenteredAge] = useState("");
  const [error, setError] = useState();

  const onsubmithandler = (event) => {
    event.preventDefault();

    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please Enter a Valid name and Age (non-empty values).",
      });
      return;
    }

    if (+enteredAge < 0) {
      setError({
        title: "Invalid Age",
        message: "Please enter a valid age (> 0).",
      });
      return;
    }

    props.onSubmit(enteredUsername, enteredAge);

    setenteredAge("");
    setenteredUsername("");
  };

  const usernamechangehandler = (event) => {
    setenteredUsername(event.target.value);
  };

  const agechangehandler = (event) => {
    setenteredAge(event.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={onsubmithandler}>
          <label htmlFor="username"> Username</label>
          <input
            id="username"
            type="text"
            value={enteredUsername}
            onChange={usernamechangehandler}
          ></input>
          <label htmlFor="age"> Age (Years) </label>
          <input
            id="age"
            type="number"
            value={enteredAge}
            onChange={agechangehandler}
          ></input>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
