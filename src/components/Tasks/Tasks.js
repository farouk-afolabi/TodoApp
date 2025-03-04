
import Task from "./Task/Task";

function Tasks({tasks, onStatusChange, onTaskRemove,onClearTasks}) {


  return (
    <>
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
{/* Remove Button */}
      <hr />
      <button onClick={onClearTasks}>Clear Tasks</button>
    </>
  );
}

export default Tasks;
