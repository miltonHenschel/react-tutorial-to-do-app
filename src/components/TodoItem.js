/* eslint-disable import/no-extraneous-dependencies */
import PropTypes from 'prop-types';

function TodoItem({ itemProp, handleChange, deleteTodo }) {
  return (
    <li>
      <input
        type="checkbox"
        checked={itemProp.completed}
        onChange={() => handleChange(itemProp.id)}
      />
      &nbsp;&nbsp;
      <button type="button" onClick={() => deleteTodo(itemProp.id)}>
        Delete
      </button>
      {' '}
      &nbsp;&nbsp;
      {itemProp.title}
    </li>
  );
}

TodoItem.propTypes = {
  itemProp: PropTypes.isRequired,
  handleChange: PropTypes.isRequired,
  deleteTodo: PropTypes.isRequired,
};

export default TodoItem;
