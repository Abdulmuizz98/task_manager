import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";

function Header({ title, showAddTask, showAddTaskHandler }) {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button
        color={showAddTask ? "red" : "green"}
        text={showAddTask ? "Close" : "Add"}
        onClickHandler={showAddTaskHandler}
      />
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};
export default Header;
