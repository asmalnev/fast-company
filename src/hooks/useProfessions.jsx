import React, { createContext, useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import professionService from "../service/profession.service";
import { toast } from "react-toastify";

// создание контекста
const ProfessionsContext = createContext();

// экспорт хука useProfessions с контекстом ProfessionsContext
export const useProfessions = () => {
  return useContext(ProfessionsContext);
};

const ProfessionsProvider = ({ children }) => {
  const [isLoading, setLoading] = useState(true);
  const [professions, setProfessions] = useState([]);
  const [error, setError] = useState(null);

  // метод получения ошибки
  const errorCatcher = (error) => {
    const { message } = error.response.data;
    setError(message);
  };

  const getProfession = (id) => {
    return professions.find((p) => p._id === id);
  };

  // метод получения профессий
  const getProfessionsList = async () => {
    try {
      const { content } = await professionService.get();
      setProfessions(content);
      setLoading(false);
    } catch (error) {
      errorCatcher(error);
    }
  };

  // получение профессий при загрузке страницы
  useEffect(() => {
    getProfessionsList();
  }, []);

  // отображение ошибок
  useEffect(() => {
    if (error !== null) {
      toast(error);
      setError(null);
    }
  }, [error]);

  return (
    <ProfessionsContext.Provider
      value={{ isLoading, professions, getProfession }}
    >
      {children}
    </ProfessionsContext.Provider>
  );
};

ProfessionsProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

export default ProfessionsProvider;
