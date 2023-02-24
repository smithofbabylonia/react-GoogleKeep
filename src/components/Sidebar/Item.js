export default function Item(props){
    return(
        <div className={props.isActive? "sidebar-item hover active":"sidebar-item hover"}>
          <span className="material-icons-outlined">{props.icon}</span>
          <span className="sidebar-text">{props.title}</span>
        </div>
    );
}