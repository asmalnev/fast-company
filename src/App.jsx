import React, { useState } from 'react';
import api from './api';
import SearchStatus from './components/SearchStatus';
import UsersList from './components/UsersList';

const App = () => {
  const [users, setUsers] = useState(api.users.fetchAll());

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
      <SearchStatus userCount={users.length} />
      <UsersList
        users={users}
        onDelete={handleDelete}
        onToggleBookmark={handleToggleBookmark}
      />
    </>
  );
};

export default App;
