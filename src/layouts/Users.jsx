import React from "react";
import { useParams, Redirect } from "react-router-dom";
import UserPage from "../components/pages/UserPage";
import UsersListPage from "../components/pages/UsersListPage";
import UserEditPage from "../components/pages/UserEditPage/UserEditPage";
import UserProvider from "../hooks/useUsers";

const Users = () => {
  const params = useParams();

  const { userId, edit } = params;

  return (
    <UserProvider>
      {userId ? (
        edit ? (
          edit.toLowerCase() === "edit" ? (
            <UserEditPage userId={userId} />
          ) : (
            <Redirect to={`/users/${userId}`} />
          )
        ) : (
          <UserPage userId={userId} />
        )
      ) : (
        <UsersListPage />
      )}
    </UserProvider>
  );
};

export default Users;
