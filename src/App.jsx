import React, { useEffect, useState } from 'react';
import api from './api';
import Users from './components/Users';

const App = () => {
  const [users, setUsers] = useState();

  useEffect(() => {
    api.users.fetchAll().then((data) => setUsers(data));
  }, []);

  const handleDelete = (userId) => {
    setUsers(users.filter((user) => user._id !== userId));
  };

  const handleToggleBookmark = (userId) => {
    setUsers((prevState) =>
      prevState.map((user) =>
        user._id === userId ? { ...user, bookmark: !user.bookmark } : user
      )
    );
  };

  return (
    <>
      {users && (
        <Users
          users={users}
          onDelete={handleDelete}
          onToggleBookmark={handleToggleBookmark}
        />
      )}
    </>
  );
};

export default App;
