import React from "react";
import PropTypes from "prop-types";
import { useProfessions } from "../../hooks/useProfessions";

const Profession = ({ id }) => {
  const { isLoading, getProfession } = useProfessions();

  const prof = getProfession(id);

  return <>{!isLoading ? prof.name : "loading"}</>;
};

Profession.propTypes = {
  id: PropTypes.string
};

export default Profession;
