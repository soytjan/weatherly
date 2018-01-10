import PropTypes from "prop-types";
import "../css/Current.scss";
import React from "react";

const Current = props => {
  let {day, month, city, weekday, weather, icon, weatherCondition, current, high, low, summary} = props;

  return (
    <div className="Current">
      <h2 className="box-header">{city}</h2>
      <div className="bottom-container">
        <div className="center">
          <h4 className="day">{weekday}</h4>
          <p className="date">
            {month} {day}
          </p>
        </div>
        <h3>{weather}</h3>
        <img
          src={icon[weatherCondition].blue}
          alt="sunny weather icon"
        />
        <div className="center">
          <h3 className="currentTemp">{current} &deg;F</h3>
          <div className="high-low-container">
            <h4 className="high-low">
              HIGH
              <span className="temp">{high} &deg;F</span>
            </h4>
            <h4 className="high-low">
              LOW
              <span className="temp">{low} &deg;F</span>
            </h4>
          </div>
        </div>
        <div className="center summary">
          <h5>Summary</h5>
          <p>{summary}</p>
        </div>
      </div>
    </div>
  );
};

Current.propTypes = {
  city: PropTypes.string,
  current: PropTypes.number,
  day: PropTypes.number,
  high: PropTypes.string,
  icon: PropTypes.object,
  low: PropTypes.string,
  month: PropTypes.string,
  summary: PropTypes.string,
  weather: PropTypes.string,
  weatherCondition: PropTypes.string,
  weekday: PropTypes.string
};
export default Current;
