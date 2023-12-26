import React, { createContext, useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import userService from "../service/user.service";
import { toast } from "react-toastify";

// создание контекста
const UserContext = createContext();

// экспорт хука useUsers с контекстом UserContext
export const useUsers = () => {
  return useContext(UserContext);
};

const UserProvider = ({ children }) => {
  // состояния
  const [users, setUsers] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // метод получения ошибки
  const errorCatcher = (error) => {
    const { message } = error.response.data;
    setError(message);
  };

  // метод получения пользователей
  const getUsers = async () => {
    try {
      const { content } = await userService.get();
      setUsers(content);
      setLoading(false);
    } catch (error) {
      errorCatcher(error);
    }
  };

  // получение пользователей при загрузке страницы
  useEffect(() => {
    getUsers();
  }, []);

  // отображение ошибок
  useEffect(() => {
    if (error !== null) {
      toast(error);
      setError(null);
    }
  }, [error]);

  return (
    <UserContext.Provider value={{ users }}>
      {!isLoading ? children : "loading"}
    </UserContext.Provider>
  );
};

UserProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

export default UserProvider;
