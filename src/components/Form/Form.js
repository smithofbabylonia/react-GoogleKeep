import './Form.css';
import { uid } from 'uid';


function Form(props){
    const {titleContent, textContent, setTitleContent, setTextContent} = props;
    //const [display, setDisplay] = useState(props.displays);
    const quicks= {display: props.typingState ? 'none' : 'block',};
    const contexts={display: props.typingState ? 'block' : 'none',};

    function formClicked(){
		if (!props.typingState) {
		  props.toggleModal(!props.typingState);
      }
    }
    
    function closeBtn(event){
      event.preventDefault();
      props.toggleModal(!props.typingState);
      let runiq = uid(16);
      if (props.editSubject.length===0) {
        props.updateNotes({id:runiq, title:titleContent, text:textContent});
      } else {
        //search in list and update variables
        props.editingNote();
      }
      //console.log(titleContent,textContent);
      formClicked();
      setTitleContent("");
      setTextContent("");
      props.editt("");
    }

    function textChangeLogger(event){
      setTextContent(event.target.value);
    }
    function titleChangeLogger(event){
      setTitleContent(event.target.value);
    }
    return (
      <div className="form-container inactive-form" onClick={formClicked}>
        <form style={props.displays} onSubmit={closeBtn}>
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