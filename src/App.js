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

  function updateNotes(newNote){// 
    addNote([...notesList,newNote]);
  }

  function editingNote(){
    console.log(notesList[index].title,notesList[index].text);
    notesList[index].title=titleContent;
    notesList[index].text=textContent;
    setIndex(null);
  }

  function excuseModal(){
    changeTyping(!typingState);
  }
  function clickNote(event){
    if(event.target.classList.contains("small-icon")) return;
    edit(event.currentTarget.id);
    setIndex(notesList.findIndex((item)=> item.id===event.currentTarget.id));
    changeTyping(!typingState);
    console.log("Now editting note:",index);
    setTitleContent(notesList[index].title);
    setTextContent(notesList[index].text);
  }

  function archiveNote(noteId){
    addNote(notesList.filter((note)=>{if(noteId!==note.id) return note}));
  }

  return (
    <div>
      <Navbar/>
      <Sidebar/>
      <Form displays={displays} typingState={typingState} toggleModal={changeTyping} updateNotes={updateNotes} editSubject={editing} editt={edit} notes={notesList} editingNote={editingNote} textContent={textContent} titleContent={titleContent} setTitleContent={setTitleContent} setTextContent={setTextContent}/>
      <Notes notes={notesList} archiveNote={archiveNote} clickNote={clickNote}/>
      <div className='modal' style={modalState} onClick={excuseModal}/>
    </div>
  );
}

export default App;
