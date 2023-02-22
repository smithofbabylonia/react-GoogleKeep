import Note from './Note';
import './Note.css';


function Notes(props){
  
    return(
		<div className='notes'>
      {props.notes.length===0 && <h1>Nothing to see here!</h1>}  
			{props.notes.map(note=>{return <Note key={note.id} id={note.id} title={note.title} text={note.text} archive={props.archiveNote} clickNote={props.clickNote}/>})}
		</div>
    );
}

export default Notes;
