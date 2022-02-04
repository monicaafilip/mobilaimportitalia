import React, { useCallback, useEffect, useRef } from "react";
import PropTypes from "prop-types";

import { useLocalStorage } from "../../helpers/useLocalStorage";

import "./multirangeSlider.scss";

const MultiRangeSlider = ({ min, max, onChange }) => {
  const [minVal, setMinVal] = useLocalStorage("minVal", min);
  const [maxVal, setMaxVal] = useLocalStorage("maxVal", max);

  const range = useRef(null);

  // Convert to percentage
  const getPercent = useCallback(
    (value) => Math.round(((value - min) / (max - min)) * 100),
    [min, max]
  );

  // Set width of the range to decrease from the left side
  useEffect(() => {
    const minPercent = getPercent(minVal);
    const maxPercent = getPercent(maxVal);

    if (range.current) {
      range.current.style.left = `${minPercent}%`;
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [minVal, getPercent, maxVal]);

  // Set width of the range to decrease from the right side
  useEffect(() => {
    const minPercent = getPercent(minVal);
    const maxPercent = getPercent(maxVal);

    if (range.current) {
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [maxVal, getPercent, minVal]);

  // Get min and max values when their state changes
  useEffect(() => {
    const timeOutId = setTimeout(
      () => onChange({ min: minVal, max: maxVal }),
      500
    );
    return () => clearTimeout(timeOutId);
  }, [minVal, maxVal, onChange]);

  return (
    <div className="multirange">
      <h2 className="price">Preț</h2>
      <div className="container">
        <input
          type="range"
          min={min}
          max={max}
          value={minVal}
          step="100"
          onChange={(event) => {
            const value = Math.min(Number(event.target.value), maxVal - 1);
            setMinVal(value);
          }}
          className="thumb thumb--left"
          style={{ zIndex: minVal > max - 100 && "5" }}
        />
        <input
          type="range"
          min={min}
          max={max}
          value={maxVal}
          step="100"
          onChange={(event) => {
            const value = Math.max(Number(event.target.value), minVal + 1);
            setMaxVal(value);
          }}
          className="thumb thumb--right"
        />

        <div className="slider">
          <div className="slider__track" />
          <div ref={range} className="slider__range" />
          <div className="slider__left-value">{minVal}</div>
          <div className="slider__right-value">{maxVal}</div>
        </div>
      </div>
    </div>
  );
};

MultiRangeSlider.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default MultiRangeSlider;
