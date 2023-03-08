/*
import Form from './Form';
// import Modal from './Modal';
// import Navbar from './Navbar';
// import UncontrolledForm from './UncontrolledForm';
*/

import Header from '../components/Header';
import TodosLogic from '../components/TodosLogic';

const Home = () => (
  <>
    <div className="wrapper">
      <div className="todos">
        {/* <Navbar />
        <Modal />
        <UncontrolledForm />
        <Form /> */}
        <Header />
        <TodosLogic />
      </div>
    </div>
  </>
);

export default Home;
