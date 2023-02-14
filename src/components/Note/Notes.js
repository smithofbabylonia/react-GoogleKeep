import { useState } from 'react';
import Note from './Note';
import './Note.css';


function Notes(props){
    const [notes,updateNotes]=useState(<h1>Nothing to see here!</h1>);
    
    /*function populate(){
      updateNotes(props.notes.map(note=>{return <Note key={note.id} id={note.id} title={note.title} text={note.text}/>}));
    }*/
    return(
		<div className='notes'>
			{props.notes.map(note=>{return <Note key={note.id} id={note.id} title={note.title} text={note.text}/>})}
		</div>
    );
}

export default Notes;
