import Note from './Note';
import './Note.css';


function Notes(props){
    const spacer = {'margin-left': props.burger ? '170px' : '65px'};
    return(
		<div className='notes' style={spacer}>
      {props.notes.length===0 && <h1>Nothing to see here!</h1>}  
			{props.notes.map(note=>{return <Note key={note.id} id={note.id} title={note.title} text={note.text} archive={props.archiveNote} clickNote={props.clickNote}/>})}
		</div>
    );
}

export default Notes;
