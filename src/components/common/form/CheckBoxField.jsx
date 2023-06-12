import React from "react";
import PropTypes from "prop-types";

const CheckBoxField = ({ name, onChange, value, children }) => {
  const handleChange = () => {
    onChange({ name, value: !value });
  };

  return (
    <div className="form-check mb-4">
      <input
        className="form-check-input"
        type="checkbox"
        id={name}
        value=""
        checked={value}
        onChange={handleChange}
      />
      <label className="form-check-label" htmlFor={name}>
        {children}
      </label>
    </div>
  );
};

CheckBoxField.propTypes = {
  name: PropTypes.string,
  value: PropTypes.bool,
  onChange: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

export default CheckBoxField;
