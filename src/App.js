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
  const [index,setIndex] = useState(null);
  const [textContent, setTextContent] = useState("");//0 is title and 1 is text
  const [titleContent, setTitleContent] = useState("");//0 is title and 1 is text
  const [sideWidth, toggleWidth] = useState(false);

  function updateNotes(newNote){// 
    addNote([...notesList,newNote]);
  }

  function editingNote(){
    notesList[index].title=titleContent;
    notesList[index].text=textContent;
    setIndex(null);
  }

  function excuseModal(){
    changeTyping(!typingState);
    setTitleContent("");
    setTextContent("");
    edit("");
    setIndex(null);
  }

  function clickNote(event){
    if(event.target.classList.contains("small-icon")) return;
    edit(event.currentTarget.id);
    var tempIndex = notesList.findIndex((item)=> item.id===event.currentTarget.id);
    setIndex(tempIndex);
    changeTyping(!typingState);
    setTitleContent(notesList[tempIndex].title);
    setTextContent(notesList[tempIndex].text);
  }

  function archiveNote(noteId){
    addNote(notesList.filter((note)=>{if(noteId!==note.id) return note}));
  }

  return (
    <div>
      <Navbar sideWidth={sideWidth} toggleWidth={toggleWidth}/>
      <Sidebar typingState={typingState} sideWidth={sideWidth}/>
      <Form displays={displays} typingState={typingState} toggleModal={changeTyping} updateNotes={updateNotes} editSubject={editing} editt={edit} notes={notesList} editingNote={editingNote} textContent={textContent} titleContent={titleContent} setTitleContent={setTitleContent} setTextContent={setTextContent}/>
      <Notes notes={notesList} archiveNote={archiveNote} clickNote={clickNote} burger={sideWidth}/>
      <div className='modal' style={modalState} onClick={excuseModal}/>
    </div>
  );
}

export default App;
