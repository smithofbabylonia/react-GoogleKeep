
export default function Note(props){

  function deleteThem(){
    alert("Delete every virus from my system");
    props.archive(props.id);
  }
    return(
        <div className="note" id={props.id} onClick={props.clickNote}>
          <div className="material-icons check-circle note-btnz">check_circle</div>
          <div className="title">{props.title}</div>
          <div className="text">{props.text}</div>
          <div className="note-footer note-btnz">

            <div className="tooltip">
              <span className="material-icons-outlined hover small-icon">add_alert</span>
              <span className="tooltip-text">Remind me</span>
            </div>
            <div className="tooltip">
              <span className="material-icons-outlined hover small-icon">person_add</span>
              <span className="tooltip-text">Collaborator</span>
            </div>
            <div className="tooltip">
              <span className="material-icons-outlined hover small-icon">palette</span>
              <span className="tooltip-text">Change Color</span>
            </div>
            <div className="tooltip">
              <span className="material-icons-outlined hover small-icon">image</span>
              <span className="tooltip-text">Add Image</span>
            </div>
            <div className="tooltip"  onClick={deleteThem}>
              <span className="material-icons-outlined hover small-icon">archive</span>
              <span className="tooltip-text">Archive</span>
            </div>
            <div className="tooltip">
              <span className="material-icons-outlined hover small-icon">more_vert</span>
              <span className="tooltip-text">More</span>
            </div>
          </div>
          </div>
    );
}