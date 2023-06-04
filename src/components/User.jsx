import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import api from "../api";
import QualitiesList from "./QualitiesList";
import { useHistory } from "react-router-dom";

const User = ({ userId }) => {
  const [userInfo, setUserInfo] = useState();

  useEffect(() => {
    api.users.getById(userId).then((data) => setUserInfo(data));
  }, []);

  const history = useHistory();

  const handleBack = () => {
    history.push("/users");
  };

  return userInfo ? (
    <>
      <h1>{userInfo.name}</h1>
      <h2>Профессия: {userInfo.profession.name}</h2>
      <QualitiesList qualities={userInfo.qualities} />
      <div>completedMeetings: {userInfo.completedMeetings}</div>
      <h2>Rate: {userInfo.rate}</h2>
      <button onClick={handleBack}>Все пользователи</button>
    </>
  ) : (
    "loading..."
  );
};

User.propTypes = {
  userId: PropTypes.string.isRequired
};

export default User;
