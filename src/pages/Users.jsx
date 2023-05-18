import React from 'react';
import { useParams } from 'react-router-dom';
import UsersList from '../components/Users';
import User from './User';

const Users = () => {
  const params = useParams();

  const { userId } = params;

  return <> {userId ? <User userId={userId} /> : <UsersList />} </>;
};

export default Users;
