import React from 'react';
import PropTypes from 'prop-types';

const GroupList = ({
  items,
  keyProperty,
  valueProperty,
  onItemSelect,
  selectedItem
}) => (
  <ul className="list-group">
    {Object.values(items).map((item) => (
      <li
        key={item[keyProperty]}
        className={'list-group-item' + (item === selectedItem ? ' active' : '')}
        onClick={() => onItemSelect(item)}
        role="button"
      >
        {item[valueProperty]}
      </li>
    ))}
  </ul>
);

GroupList.defaultProps = {
  keyProperty: '_id',
  valueProperty: 'name'
};

GroupList.propTypes = {
  items: PropTypes.object.isRequired,
  keyProperty: PropTypes.string.isRequired,
  valueProperty: PropTypes.string.isRequired,
  onItemSelect: PropTypes.func.isRequired,
  selectedItem: PropTypes.object
};

export default GroupList;
