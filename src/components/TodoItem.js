/* eslint-disable import/no-extraneous-dependencies */
import PropTypes from 'prop-types';

const TodoItem = ({ itemProp }) => <li>{itemProp.title}</li>;

TodoItem.propTypes = {
  itemProp: PropTypes.isRequired,
};

export default TodoItem;
