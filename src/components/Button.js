import React from "react";
import PropTypes from "prop-types";

function Button({ text, color, onClickHandler }) {
  return (
    <button
      className="btn"
      style={{ backgroundColor: color }}
      onClick={onClickHandler}
    >
      {text}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
};

Button.defaultProps = {
  color: "green",
};

export default Button;
