import './App.css';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import Form from './components/Form/Form';
import Notes from './components/Note/Notes';
import './components/Modal/Modal.css';
import { useState } from 'react';

function App() {
  const [modalState,flipState] = useState({visibility:'hidden'});
  const [notesList,addNote] =useState([{id:"687ed89a8e0b", title:"Hello again", text:"This is some nice time ting!"}]);
  function toggleModal(bin){
    if (bin) {
      flipState( {visibility:"visible"});      
    } else {
      flipState({visibility:"hidden"});
    }
  }
  function updateNotes(newNote){// work on version management, the logged list is not the most recent
    console.log("New note over here! ",newNote);
    addNote([...notesList,newNote]);
    console.log(notesList);
  }
  return (
    <div>
      <Navbar/>
      <Sidebar/>
      <Form displays={{display:"flex"}} toggleModal={toggleModal} updateNotes={updateNotes}/>
      <Notes notes={notesList}/>
      <div className='modal' style={modalState}/>
    </div>
  );
}

export default App;
