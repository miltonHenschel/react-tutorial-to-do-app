import { useState } from 'react';
import PropTypes from 'prop-types';

function InputTodo({ addTodoItem }) {
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      addTodoItem(title);
      setTitle('');
      setMessage('');
    } else {
      setMessage('Please add item.');
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add Todo..."
          value={title}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
      <span>{message}</span>
      <br />
    </>
  );
}

InputTodo.propTypes = {
  addTodoItem: PropTypes.isRequired,
};

export default InputTodo;
