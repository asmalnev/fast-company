import React, { createContext, useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import qualityService from "../service/quality.service";
import { toast } from "react-toastify";

// создание контекста
const QualitiesContext = createContext();

// экспорт хука useQualities с контекстом QualityContext
export const useQualities = () => useContext(QualitiesContext);

const QualitiesProvider = ({ children }) => {
  // задаем состояния
  const [qualities, setQualities] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(true);

  const errorCatcher = (error) => {
    const { message } = error.response.data;
    setError(message);
  };

  // метод получения quality по id
  const getQuality = (id) => {
    return qualities.find((q) => q._id === id);
  };

  useEffect(() => {
    // метод первичного получения всех qualities
    const getQualities = async () => {
      // пессимистичное обновление данных
      try {
        const { content } = await qualityService.fetchAll();

        // обновление состояния qualities
        setQualities(content);

        // обновление состояния загрузки
        setLoading(false);
      } catch (error) {
        errorCatcher(error);
      }
    };

    // вызов метода
    getQualities();
  }, []);

  useEffect(() => {
    if (error !== null) {
      toast(error);
      setError(null);
    }
  }, [error]);

  return (
    <QualitiesContext.Provider
      value={{
        qualities,
        isLoading,
        getQuality
      }}
    >
      {children}
    </QualitiesContext.Provider>
  );
};

QualitiesProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

export default QualitiesProvider;
