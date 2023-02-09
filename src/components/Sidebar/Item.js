export default function Item(props){
    return(
        <div className="sidebar-item">
          <span className="material-icons-outlined hover">{props.icon}</span>
          <span className="sidebar-text">{props.title}</span>
        </div>
    );
}