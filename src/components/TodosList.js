/* eslint-disable import/no-extraneous-dependencies */
import PropTypes from 'prop-types';

import TodoItem from './TodoItem';

const TodosList = ({ todosProps, handleChange, deleteTodo }) => (
  <>
    {/* <div>TodosList content</div> */}
    <ul>
      {todosProps.map((todo) => (
        <TodoItem
          key={todo.id}
          itemProp={todo}
          handleChange={handleChange}
          deleteTodo={deleteTodo}
        />
      ))}
    </ul>
  </>
);

TodosList.propTypes = {
  todosProps: PropTypes.isRequired,
  handleChange: PropTypes.isRequired,
  deleteTodo: PropTypes.isRequired,
};

export default TodosList;
