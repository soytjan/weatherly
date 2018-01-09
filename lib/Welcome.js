import PropTypes from "prop-types";
import Search from "./Search.js";
import "../css/Welcome.scss";
import React from "react";

const Welcome = props => {
  return (
    <div className="Welcome wrapper">
      <Search getWeatherData={props.getWeatherData} />
    </div>
  );
};

Welcome.propTypes = {
  getWeatherData: PropTypes.func
};

export default Welcome;
