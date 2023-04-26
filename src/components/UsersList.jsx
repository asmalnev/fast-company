import React, { useEffect, useState } from 'react';
import SearchStatus from './SearchStatus';
import Pagination from './Pagination';
import User from './User';
import GroupList from './GroupLIst';
import { paginate } from '../utils/paginate';
import PropTypes from 'prop-types';
import api from '../api';

const UsersList = ({ users: allUsers, ...rest }) => {
  const usersOnPage = 2;

  const [currentPage, setCurrentPage] = useState(1);

  const [professions, setProfessions] = useState();

  const [selectedProf, setSelectedProf] = useState();

  useEffect(() => {
    api.professions.fetchAll().then((data) => setProfessions(data));
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedProf]);

  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex);
  };

  const handleProfessionSelect = (item) => {
    setSelectedProf(item);
  };

  const filteredUsers = selectedProf
    ? allUsers.filter((user) => user.profession._id === selectedProf._id)
    : allUsers;

  const usersLength = filteredUsers.length;

  const usersCrop = paginate(filteredUsers, currentPage, usersOnPage);

  const clearFilter = () => {
    setSelectedProf();
  };

  return (
    <div className="d-flex">
      {professions && (
        <div className="d-flex flex-column flex-shrink-0 p-3">
          <GroupList
            items={professions}
            onItemSelect={handleProfessionSelect}
            selectedItem={selectedProf}
          />
          <button className="btn btn-secondary mt-2" onClick={clearFilter}>
            Очистить
          </button>
        </div>
      )}
      <div className="d-flex flex-column">
        <SearchStatus userCount={usersLength} />

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

        <div className="d-flex justify-content-center">
          <Pagination
            itemsCount={usersLength}
            itemsOnPage={usersOnPage}
            onPageChange={handlePageChange}
            currentPage={currentPage}
          />
        </div>
      </div>
    </div>
  );
};

UsersList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default UsersList;
