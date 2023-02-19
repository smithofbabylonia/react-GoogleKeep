import './App.css';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import Form from './components/Form/Form';
import Notes from './components/Note/Notes';
import './components/Modal/Modal.css';
import { useState } from 'react';

function App() {
  const [typingState, changeTyping] = useState(false);
  const modalState = {visibility: typingState ? 'visible':'hidden',};
  const displays = {display: typingState ? 'block' : 'flex',};
  const [notesList,addNote] =useState([]);//{id:"687ed89a8e0b", title:"Hello again", text:"This is some nice time ting!"}]);
  const [editing,edit] = useState("");//ID of the note being edited
  const empty = "<h1>Nothing to see here!</h1>";
  /*function toggleModal(bin){
    if (bin) {
      flipState( {visibility:"visible"});      
    } else {
      flipState({visibility:"hidden"});
    }
  }*/
  function updateNotes(newNote){// work on version management, the logged list is not the most recent
    addNote([...notesList,newNote]);
  }
  /*function updateNote(newNote){

  }*/

  function excuseModal(){
    changeTyping(!typingState);
  }
  function clickNote(event){
    if(event.target.classList.contains("small-icon")) return;
    edit(event.currentTarget.id);
    console.log(notesList.findIndex((item)=> item.id==event.currentTarget.id));
    changeTyping(!typingState);
  }

  function archiveNote(noteId){
    addNote(notesList.filter((note)=>{if(noteId!==note.id) return note}));
  }

  return (
    <div>
      <Navbar/>
      <Sidebar/>
      <Form displays={displays} typingState={typingState} toggleModal={changeTyping} updateNotes={updateNotes} editSubject={editing} editt={edit} notes={notesList}/>
      <Notes notes={notesList} archiveNote={archiveNote} clickNote={clickNote} emptyNotes={empty}/>
      <div className='modal' style={modalState} onClick={excuseModal}/>
    </div>
  );
}

export default App;
