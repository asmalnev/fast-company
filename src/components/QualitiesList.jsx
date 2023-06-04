import React from "react";
import Quality from "./Quality";
import PropTypes from "prop-types";

const QualitiesList = ({ qualities }) => {
  return (
    <>
      {qualities.map((q) => (
        <Quality key={q._id} {...q} />
      ))}
    </>
  );
};

QualitiesList.propTypes = {
  qualities: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default QualitiesList;
