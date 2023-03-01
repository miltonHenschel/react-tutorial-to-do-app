import InputTodo from './InputTodo';
import TodosList from './TodosList';

const todos = [
  {
    id: 1,
    title: 'Setup development environment',
    completed: true,
  },
  {
    id: 2,
    title: 'Develop website and add content',
    completed: false,
  },
  {
    id: 3,
    title: 'Deploy to live server',
    completed: false,
  },
];

const TodosLogic = () => (
  <>
    <InputTodo />
    <TodosList todosProps={todos} />
  </>
);

export default TodosLogic;
