import Form from './Form';
import Header from './Header';
import Modal from './Modal';
import Navbar from './Navbar';
import TodosLogic from './TodosLogic';
// import UncontrolledForm from './UncontrolledForm';

const TodoApp = () => (
  <>
    <Navbar />
    <Header />
    <Modal />
    <TodosLogic />
    {/* <UncontrolledForm /> */}
    <Form />
  </>
);

export default TodoApp;
