import './App.css';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import Form from './components/Form/Form';
import Note from './components/Note/Note';
import './components/Note/Note.css';
import './components/Modal/Modal.css';
import { useState } from 'react';

function App() {
  const [modalState,flipState] = useState({visibility:'hidden'});
  //let modalState = {visibility:"hidden"};
  function toggleModal(bin){
    if (bin) {
      flipState( {visibility:"visible"});      
    } else {
      flipState({visibility:"hidden"});
    }
  }
  return (
    <div>
      <Navbar/>
      <Sidebar/>
      <Form displays={{display:"flex"}} toggleModal={toggleModal}/>
      <div className='notes'>
        <Note id={"7848e9a38f3"} title={"Hello world"} text={"This is a test component"}/>
      </div>
      <div className='modal' style={modalState}/>
    </div>
  );
}

export default App;
