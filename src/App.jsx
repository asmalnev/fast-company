import { useState } from "react";
import api from "./api";
import Users from "./components/users";
import SearchStatus from "./components/SearchStatus";

const App = () => {
  const [users, setUsers] = useState(api.users.fetchAll());

  const handleDelete = (userId) => {
    setUsers(users.filter((user) => user._id !== userId));
  };

  return (
    <>
      <SearchStatus userCount={users.length} />
      <Users users={users} onDelete={handleDelete} />
    </>
  );
};

export default App;
