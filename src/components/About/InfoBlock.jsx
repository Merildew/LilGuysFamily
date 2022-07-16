import React from "react";
import "./styles.css";
import PropTypes from "prop-types";

export function InfoBlock(props) {
  const wrapperClass = props.type ? "right" : "left";
  return (
    <div className={`info-wrapper ${wrapperClass}`}>
      {props.type ? (
        <div className={`info-content ${wrapperClass}`}>
          <div className="info-text">
            <p className="info-text_content">{props.text}</p>
          </div>
          <div className="info-img-block">
            <img className="info-img" src={props.img}></img>
          </div>
        </div>
      ) : (
        <div className={`info-content ${wrapperClass}`}>
          <div className="info-img-block">
            <img className="info-img" src={props.img}></img>
          </div>
          <div className="info-text">
            <p className="info-text_content">{props.text}</p>
          </div>
        </div>
      )}
    </div>
  );
}

InfoBlock.propTypes = {
  type: PropTypes.bool,
  text: PropTypes.string,
  img: PropTypes.string,
};
