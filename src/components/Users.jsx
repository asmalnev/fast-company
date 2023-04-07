import * as Utils from './utils';
import api from '../api';
import { useState } from 'react';
import Table from './table/Table';

const Users = () => {
  const [users, setUsers] = useState(api.users.fetchAll());

  const handleDelete = (userId) => {
    setUsers((prevState) => prevState.filter((user) => {
      return user._id !== userId;
    }));
  };

  return (<>
      {users.length > 0 ?
        <div className="badge bg-primary fs-1 fw-bold mb-3">{users.length} {Utils.declOfNum(users.length, ['человек', 'человека', 'человек'])} встретится с тобой</div> :
        <div className="badge bg-danger fs-1 fw-bold">Ты никому не нужен</div>}

      {users.length > 0 && <Table data={users} onDelete={handleDelete}/>}
    </>);
};

export default Users;