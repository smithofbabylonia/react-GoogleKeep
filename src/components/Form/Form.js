import './Form.css';
import React,{useState} from 'react';

var toggleOn = true;

function Form(props){
    /*var display = {display:"flex"};*/
    const [display, setDisplay] = useState(props.displays);
    function formClicked(){
      //alert("Hello there");
      if (toggleOn) {
        setDisplay( {display:"block"});
        toggleOn=false;
      }else{
        console.log("Closed");
        setDisplay({display:"flex"});
        toggleOn = true;
      }
    }
    return (
      <div className="form-container inactive-form" onClick={formClicked}>
        <form style={display}>
            <input type="text" className="note-title context" placeholder="Title" />
            <input type="text" className="note-title note-text" placeholder="Take a note..." />
          <div className="form-actions">
            <div className="icons">
            <div className="tooltip quick">
              <span className="material-icons-outlined hover">check_box</span>
              <span className="tooltip-text">New List</span>
            </div>
            <div className="tooltip quick">
              <span className="material-icons-outlined hover">brush</span>
              <span className="tooltip-text">New Drawing</span>
            </div>
            <div className="tooltip quick">
              <span className="material-icons-outlined hover">image</span>
              <span className="tooltip-text">New Image</span>
            </div>
            <div className="tooltip context">
              <span className="material-icons-outlined hover small-icon">add_alert</span>
              <span className="tooltip-text">Remind me</span>
            </div>
            <div className="tooltip context">
              <span className="material-icons-outlined hover small-icon">person_add</span>
              <span className="tooltip-text">Collaborator</span>
            </div>
            <div className="tooltip context">
              <span className="material-icons-outlined hover small-icon">palette</span>
              <span className="tooltip-text">Change Color</span>
            </div>
            <div className="tooltip context">
              <span className="material-icons-outlined hover small-icon">image</span>
              <span className="tooltip-text">Add Image</span>
            </div>
            <div className="tooltip context">
              <span className="material-icons-outlined hover small-icon">archive</span>
              <span className="tooltip-text">Archive</span>
            </div>
            <div className="tooltip context">
              <span className="material-icons-outlined hover small-icon">more_vert</span>
              <span className="tooltip-text">More</span>
            </div>
            <div className="tooltip context">
              <span className="material-icons-outlined hover small-icon">undo</span>
              <span className="tooltip-text">Undo</span>
            </div>
            <div className="tooltip context">
              <span className="material-icons-outlined hover small-icon">redo</span>
              <span className="tooltip-text">Redo</span>
            </div>
          </div>
            <button type="button" className="close-btn context">Close</button>
            
          </div>
        </form>
        </div>
        
    );
}

export default Form;