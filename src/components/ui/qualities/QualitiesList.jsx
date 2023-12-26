import React from "react";
import QualityItem from "./QualityItem";
import PropTypes from "prop-types";
import { useQualities } from "../../../hooks/useQualities";

const QualitiesList = ({ qualities }) => {
  console.log(qualities);

  const { isLoading } = useQualities();

  return (
    <>
      {isLoading
        ? "loading"
        : qualities.map((q) => <QualityItem key={q} id={q} />)}
    </>
  );
};

QualitiesList.propTypes = {
  qualities: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default QualitiesList;
