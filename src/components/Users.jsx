import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import api from '../api';
import SearchStatus from './SearchStatus';
import Pagination from './Pagination';
import UsersTable from './UsersTable';
import GroupList from './GroupLIst';
import { paginate } from '../utils/paginate';

const Users = ({ users: allUsers, ...rest }) => {
  const usersOnPage = 8;

  const [currentPage, setCurrentPage] = useState(1);

  const [professions, setProfessions] = useState();

  const [selectedProf, setSelectedProf] = useState();

  const [sortBy, setSortBy] = useState[{ iter: 'name', order: 'asc' }];

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

  const handleSort = (item) => {
    setSortBy({ iter: item, order: 'asc' });
  };

  const filteredUsers = selectedProf
    ? allUsers.filter((user) => user.profession._id === selectedProf._id)
    : allUsers;

  const usersLength = filteredUsers.length;

  const sortedUsers = _.orderBy(filteredUsers, [sortBy.iter], [sortBy.order]);

  const usersCrop = paginate(sortedUsers, currentPage, usersOnPage);

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
          <UsersTable users={usersCrop} onSort={handleSort} {...rest} />
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

Users.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Users;
