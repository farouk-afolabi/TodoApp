import { useState } from "react";
import uuid from "react-uuid";
import Header from "./components/Header/Header.js";
import Tasks from "./components/Tasks/Tasks";
import Form from "./components/Form/Form.js";



function App() {
  // Sets the initial state.
  const [tasks, setTasks] = useState([
    {
      id: uuid(),
      description: "Walk the dog", 
      done: true,
    },
    {
      id: uuid(),
      description: "Wash the car",
      done: false,
    },
    {
      id: uuid(),
      description: "Finish the lab",
      done: false,
    },
  ]);

  // Removes all tasks form the list.

  const handleClearTasks = () => {
    setTasks([]);
  };


  // Toggles a task status.
  const handleStatusChange = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, done: !task.done } : task
    );
    setTasks(updatedTasks);
  };

  // Removes a task from the list.
  const handleTaskRemove = (id) => {
    const filteredTasks = tasks.filter((task) => task.id !== id);
    setTasks(filteredTasks);
  };

// Function to add a new task
const handleAddTask = ({description, status}) => {
  const newTask = {
    id: uuid(),
    description,
    done: status === "completed"
  };
  setTasks([...tasks, newTask]);
};
  
  return (
    <>
    
    <Header/>
    <Tasks tasks={tasks}
    onStatusChange={handleStatusChange}
    onTaskRemove={handleTaskRemove}
    onClearTasks={handleClearTasks}/>

    <Form onAddTask ={handleAddTask}/>
    

    </>
  );
}

export default App;
