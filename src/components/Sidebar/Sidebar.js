import './Sidebar.css';
import Item from './Item';

function Sidebar(props){
    const styles = {width: props.sideWidth ? '170px' : '65px' };

    return(
        <div className="sidebar" style={styles}>
            <Item icon={"lightbulb"} title={"Notes"} isActive={!props.typingState}/>
            <Item icon={"notifications"} title={"Reminders"}/>
            <Item icon={"edit"} title={"Edit Labels"} isActive={props.typingState}/>
            <Item icon={"archive"} title={"Archive"}/>
            <Item icon={"delete"} title={"Trash"}/>
        </div>
    );
}

export default Sidebar;