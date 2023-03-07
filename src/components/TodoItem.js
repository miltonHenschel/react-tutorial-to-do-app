/* eslint-disable import/no-extraneous-dependencies */
import PropTypes from 'prop-types';
import { useState } from 'react';
import styles from '../styles/TodoItem.module.css';

function TodoItem({ itemProp, handleChange, deleteTodo, setUpdate }) {
  const completedStyle = {
    fontStyle: 'italic',
    color: '#595959',
    opacity: 0.4,
    textDecoration: 'line-through',
  };

  const [editing, setEditing] = useState(false);

  const handleEditing = () => {
    setEditing(true);
  };

  const viewMode = {};
  const editMode = {};
  if (editing) {
    viewMode.display = 'none';
  } else {
    editMode.display = 'none';
  }

  return (
    <li className={styles.item}>
      <div className={styles.content} style={viewMode}>
        <input
          type="checkbox"
          checked={itemProp.completed}
          onChange={() => handleChange(itemProp.id)}
        />
        &nbsp;&nbsp;
        <button type="button" onClick={handleEditing}>
          Edit
        </button>
        <button type="button" onClick={() => deleteTodo(itemProp.id)}>
          Delete
        </button>{' '}
        &nbsp;&nbsp;
        <span style={itemProp.completed ? completedStyle : null}>
          {itemProp.title}
        </span>
      </div>
      <input
        type="text"
        value={itemProp.title}
        className={styles.textInput}
        style={editMode}
        onChange={(e) => setUpdate(e.target.value, itemProp.id)}
      />
    </li>
  );
}

TodoItem.propTypes = {
  itemProp: PropTypes.isRequired,
  handleChange: PropTypes.isRequired,
  deleteTodo: PropTypes.isRequired,
  setUpdate: PropTypes.isRequired,
};

export default TodoItem;
