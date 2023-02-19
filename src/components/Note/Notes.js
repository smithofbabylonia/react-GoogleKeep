import { useState } from 'react';
import Note from './Note';
import './Note.css';


function Notes(props){
    const [notes,updateNotes]=useState(props.emptyNotes);
  
    return(
		<div className='notes'>
			{props.notes.map(note=>{return <Note key={note.id} id={note.id} title={note.title} text={note.text} archive={props.archiveNote} clickNote={props.clickNote}/>})}
		</div>
    );
}

export default Notes;
