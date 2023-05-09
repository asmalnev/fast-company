import React from 'react';
import PropTypes from 'prop-types';
import Table from './Table';
import TableHeader from './TableHeader';
import TableBody from './TableBody';
import Bookmark from './Bookmark';
import QualitiesList from './QualitiesList';

const UsersTable = ({
  users,
  onSort,
  selectedSort,
  onToggleBookmark,
  onDelete
}) => {
  const columns = {
    name: {
      path: 'name',
      name: 'Имя'
    },
    qualities: {
      name: 'Качества',
      component: (user) => <QualitiesList qualities={user.qualities} />
    },
    professions: {
      path: 'profession.name',
      name: 'Профессия'
    },
    completedMeetings: {
      path: 'completedMeetings',
      name: 'Встретился, раз'
    },
    rate: {
      path: 'rate',
      name: 'Оценка'
    },
    bookmark: {
      path: 'bookmark',
      name: 'Избранное',
      component: (user) => (
        <Bookmark
          id={user._id}
          onToggleBookmark={onToggleBookmark}
          status={user.bookmark}
        />
      )
    },
    delete: {
      component: (user) => (
        <button onClick={() => onDelete(user._id)} className="btn btn-danger">
          delete
        </button>
      )
    }
  };

  return (
    <Table>
      <TableHeader {...{ onSort, selectedSort, columns }} />
      <TableBody {...{ data: users, columns }} />
    </Table>
    // <Table {...{ onSort, selectedSort, columns, data: users }} />
  );
};

UsersTable.propTypes = {
  users: PropTypes.array.isRequired,
  onSort: PropTypes.func.isRequired,
  selectedSort: PropTypes.object.isRequired,
  onToggleBookmark: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
};

export default UsersTable;
