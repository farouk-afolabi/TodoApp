
import Task from "./Task/Task";
import '../Tasks/Tasks.scss';
import { GrClearOption } from "react-icons/gr";

function Tasks({tasks, onStatusChange, onTaskRemove,onClearTasks}) {


  return (
    <div className="tasks-container">
      <h2> These are the tasks:</h2>
      {/* Renders each task. */}
      {tasks.map((task) => (
        <Task
         key={task.id} 
         task={task} 
         onStatusChange={onStatusChange}
         onTaskRemove={onTaskRemove}
         />
      )
      )}

      <button onClick={onClearTasks} className="clear-button"> <GrClearOption /> Clear Tasks</button>
    </div>
  );
}

export default Tasks;
