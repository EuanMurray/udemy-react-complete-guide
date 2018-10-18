import React from "react";
import "./Cockpit.css";
import Auxiliary from "../../hoc/Auxiliary";
import classes from "./Cockpit.css";

const cockpit = props => {
  const assignedClasses = [];
  let btnClass = "Button";

  if (props.showPersons) {
    btnClass = ["Button", "red"].join(" ");
  }

  if (props.persons.length <= 2) {
    assignedClasses.push("red");
  }

  if (props.persons.length <= 1) {
    assignedClasses.push("bold");
  }

  return (
    <Auxiliary>
      <h1>{props.appTitle}</h1>
      <p className={assignedClasses.join(" ")}>This is working</p>
      <button className={btnClass} onClick={props.clicked}>
        Switch Name
      </button>
    </Auxiliary>
  );
};

export default cockpit;
