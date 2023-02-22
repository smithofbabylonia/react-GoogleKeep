export default function Item(props){
    return(
        <div className={props.isActive? "sidebar-item active":"sidebar-item"}>
          <span className="material-icons-outlined hover">{props.icon}</span>
          <span className="sidebar-text">{props.title}</span>
        </div>
    );
}