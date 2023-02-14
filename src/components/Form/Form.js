import './Form.css';
import React,{useState} from 'react';

var toggleOn = true;

function Form(props){
    //
    const [display, setDisplay] = useState(props.displays);
    const [quicks, setQuicks] = useState({display:"block"});
    const [contexts, setContexts] = useState({display:"none"});
    const [textContent, setTextContent] = useState("");//0 is title and 1 is text
    const [titleContent, setTitleContent] = useState("");//0 is title and 1 is text
    function formClicked(){
      props.toggleModal(toggleOn);
      if (toggleOn) {
        setDisplay( {display:"block"});
        setQuicks({display:"none"});
        setContexts({display:"block"});
        
      }else{
        setDisplay({display:"flex"});
        setQuicks({display:"block"});
        setContexts({display:"none"});
        toggleOn = true;
      }
    }
    
    function closeBtn(event){
      event.preventDefault();
      toggleOn=false;
      let runiq = event.timeStamp.toString(16);
      props.updateNotes({id:runiq,title:titleContent,text:textContent});
      console.log(titleContent,textContent);
      formClicked();
      setTitleContent("");
      setTextContent("");
    }

    function textChangeLogger(event){
      setTextContent(event.target.value);
    }
    function titleChangeLogger(event){
      setTitleContent(event.target.value);
    }
    return (
      <div className="form-container inactive-form" onClick={formClicked}>
        <form style={display} onSubmit={closeBtn}>
            <input type="text" className="note-title" placeholder="Title" style={contexts} onChange={titleChangeLogger} value={titleContent}/>
            <input type="text" className="note-title note-text" placeholder="Take a note..." onChange={textChangeLogger} value={textContent}/>
          <div className="form-actions">
            <div className="icons">
            <div className="tooltip" style={quicks}>
              <span className="material-icons-outlined hover">check_box</span>
              <span className="tooltip-text">New List</span>
            </div>
            <div className="tooltip" style={quicks}>
              <span className="material-icons-outlined hover">brush</span>
              <span className="tooltip-text">New Drawing</span>
            </div>
            <div className="tooltip" style={quicks}>
              <span className="material-icons-outlined hover">image</span>
              <span className="tooltip-text">New Image</span>
            </div>
            <div className="tooltip" style={contexts}>
              <span className="material-icons-outlined hover small-icon">add_alert</span>
              <span className="tooltip-text">Remind me</span>
            </div>
            <div className="tooltip" style={contexts}>
              <span className="material-icons-outlined hover small-icon">person_add</span>
              <span className="tooltip-text">Collaborator</span>
            </div>
            <div className="tooltip" style={contexts}>
              <span className="material-icons-outlined hover small-icon">palette</span>
              <span className="tooltip-text">Change Color</span>
            </div>
            <div className="tooltip" style={contexts}>
              <span className="material-icons-outlined hover small-icon">image</span>
              <span className="tooltip-text">Add Image</span>
            </div>
            <div className="tooltip" style={contexts}>
              <span className="material-icons-outlined hover small-icon">archive</span>
              <span className="tooltip-text">Archive</span>
            </div>
            <div className="tooltip" style={contexts}>
              <span className="material-icons-outlined hover small-icon">more_vert</span>
              <span className="tooltip-text">More</span>
            </div>
            <div className="tooltip" style={contexts}>
              <span className="material-icons-outlined hover small-icon">undo</span>
              <span className="tooltip-text">Undo</span>
            </div>
            <div className="tooltip" style={contexts}>
              <span className="material-icons-outlined hover small-icon">redo</span>
              <span className="tooltip-text">Redo</span>
            </div>
          </div>
            <button type="submit" className="close-btn" style={contexts}>Close</button>
            
          </div>
        </form>
        </div>
        
    );
}

export default Form;