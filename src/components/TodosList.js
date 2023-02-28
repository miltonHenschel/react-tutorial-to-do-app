/* eslint-disable import/no-extraneous-dependencies */
import PropTypes from 'prop-types';

import TodoItem from './TodoItem';

const TodosList = ({ todosProps }) => (
  <>
    <div>TodosList content</div>
    <ul>
      {todosProps.map((todo) => (
        <TodoItem key={todo.id} itemProp={todo} />
      ))}
    </ul>
  </>
);

TodosList.propTypes = {
  todosProps: PropTypes.isRequired,
};

export default TodosList;
