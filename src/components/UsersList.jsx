import React, { useState } from 'react';
import Pagination from './Pagination';
import User from './User';
import { paginate } from '../utils/paginate';
import PropTypes from 'prop-types';

const UsersList = ({ users, ...rest }) => {
  const usersLength = users.length;

  const usersOnPage = 5;

  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex);
  };

  const usersCrop = paginate(users, currentPage, usersOnPage);

  return (
    <>
      {usersLength > 0 && (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Имя</th>
              <th scope="col">Качества</th>
              <th scope="col">Профессия</th>
              <th scope="col">Встретился, раз</th>
              <th scope="col">Оценка</th>
              <th scope="col">Избранное</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {usersCrop.map((user) => (
              <User key={user._id} {...user} {...rest} />
            ))}
          </tbody>
        </table>
      )}

      <Pagination
        itemsCount={usersLength}
        itemsOnPage={usersOnPage}
        onPageChange={handlePageChange}
        currentPage={currentPage}
      />
    </>
  );
};

UsersList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default UsersList;
