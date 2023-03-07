/* eslint-disable import/no-extraneous-dependencies */
import PropTypes from 'prop-types';
import { useState } from 'react';
import styles from '../styles/TodoItem.module.css';

function TodoItem({ itemProp, handleChange, deleteTodo }) {
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

  return (
    <li className={styles.item}>
      <div className={styles.content}>
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
        </button>
        {' '}
        &nbsp;&nbsp;
        <span style={itemProp.completed ? completedStyle : null}>
          {itemProp.title}
        </span>
      </div>
      <input type="text" value={itemProp.title} className={styles.textInput} />
    </li>
  );
}

TodoItem.propTypes = {
  itemProp: PropTypes.isRequired,
  handleChange: PropTypes.isRequired,
  deleteTodo: PropTypes.isRequired,
};

export default TodoItem;
