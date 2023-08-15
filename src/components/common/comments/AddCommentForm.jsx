import React, { useEffect, useState } from "react";
import API from "../../../api";
import SeletField from "../form/SelectField";
import TextareaField from "../form/TextareaField";
import { validator } from "../../../utils/validator";
import PropTypes from "prop-types";

const initialData = {
  userId: "",
  content: ""
};

const AddCommentForm = ({ onSubmit }) => {
  const [data, setData] = useState(initialData);

  const [users, setUsers] = useState({});

  const [errors, setErrors] = useState({});

  const handleChange = (target) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value
    }));
  };

  const validatorConfig = {
    userId: {
      isRequired: {
        message: "Выберите от сьего имени хотите отправить сообщение"
      }
    },
    content: {
      isRequired: {
        message: "Сообщение не может быть пустым"
      }
    }
  };

  const validate = () => {
    const errors = validator(data, validatorConfig);

    setErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const clearForm = () => {
    setData(initialData);
    setErrors({});
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isValid = validate();

    if (!isValid) return;

    onSubmit(data);

    clearForm();
  };

  const arrayOfUsers =
    users &&
    Object.values(users).map((user) => ({
      label: user.name,
      value: user._id
    }));

  useEffect(() => {
    API.users.fetchAll().then((data) => setUsers(data));
  }, []);

  return (
    <div>
      <h2>New comment</h2>
      <form onSubmit={handleSubmit}>
        <SeletField
          onChange={handleChange}
          options={arrayOfUsers}
          name="userId"
          value={data.userId}
          defaultOption="Выберите пользователя"
          error={errors.userId}
        />
        <TextareaField
          value={data.content}
          onChange={handleChange}
          name="content"
          label="Сообщение"
          error={errors.content}
        />
        <div className="d-flex justify-content-end">
          <button className="btn btn-primary">Опубликовать</button>
        </div>
      </form>
    </div>
  );
};

AddCommentForm.propTypes = {
  onSubmit: PropTypes.func
};

export default AddCommentForm;
