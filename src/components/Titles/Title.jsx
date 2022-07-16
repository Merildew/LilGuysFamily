import React from "react";
import "./styles.css";
import PropTypes from "prop-types";

export function Title(props) {
  return (
    <div className="title-wrapper">
      <div className="hidden-link" id={props.name}></div>
      <div className="title-block">
        <h3 className="section-title">{props.title}</h3>
      </div>
    </div>
  );
}

Title.propTypes = {
  title: PropTypes.string,
  name: PropTypes.string,
};
