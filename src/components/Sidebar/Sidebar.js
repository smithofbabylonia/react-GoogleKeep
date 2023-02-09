import './Sidebar.css';
import Item from './Item';

function Sidebar(){
    return(
        <div className="sidebar">
        <Item icon={"lightbulb"} title={"Notes"}/>
        <Item icon={"notifications"} title={"Reminders"}/>
        <Item icon={"edit"} title={"Edit Labels"}/>
        <Item icon={"archive"} title={"Archive"}/>
        <Item icon={"delete"} title={"Trash"}/>
      </div>
    );
}

export default Sidebar;