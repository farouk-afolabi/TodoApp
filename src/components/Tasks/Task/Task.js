import '../Task/Task.scss';
import { FaDeleteLeft } from "react-icons/fa6";
import { FaToggleOff, FaToggleOn  } from "react-icons/fa";


function Task(props) {
  const handleStatusClick = () => {
    const id = props.task.id;
    props.onStatusChange(id);
  };
  const handleRemoveClick = () => {
    const id = props.task.id;
    props.onTaskRemove(id);
  };

  return (
    <div className="task">
      <h3>{props.task.description}</h3>

      <div className="task-info">
      <div>Id: {props.task.id}</div>
    
        <div> Status: {props.task.done ? ( <span className="completed">Completed</span>) : ( "Open")} </div>
      </div>
      <div className="task-actions">
      <button className="status-button" onClick={handleStatusClick}> {props.task.done ? <FaToggleOn className='toggleOn'/> : <FaToggleOff className='toggleOff'/>} Change Status </button>
      <button className="remove-button" onClick={handleRemoveClick}> <FaDeleteLeft className='icon' /> Remove Task</button>
      </div>
    </div>
  );
}
export default Task;
