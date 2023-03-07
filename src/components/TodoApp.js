// import Form from './Form';
import Header from './Header';
// import Modal from './Modal';
// import Navbar from './Navbar';
import TodosLogic from './TodosLogic';
// import UncontrolledForm from './UncontrolledForm';

const TodoApp = () => (
  <>
    <div className="wrapper">
      <div className="todos">
        {/* <Navbar /> */}
        <Header />
        {/* <Modal /> */}
        <TodosLogic />
        {/* <UncontrolledForm /> */}
        {/* <Form /> */}
      </div>
    </div>
  </>
);

export default TodoApp;
