import { useState, useEffect } from "react";
import Header from "./components/Header/Header.js";
import Tasks from "./components/Tasks/Tasks";
import Form from "./components/Form/Form.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./components/NotFound.js";
import Help from "./components/Help.js";
import HelpOverview from "./components/HelpOverview.js";
import AddHelp from "./components/AddHelp.js";
import RemoveHelp from "./components/RemoveHelp.js";
import ChangeHelp from "./components/ChangeHelp.js";
import * as database from "./database";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Load tasks from Firestore
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const firestoreTasks = await database.load();
        const formattedTasks = firestoreTasks.map(task => ({
          id: task.id,
          description: task.description,
          done: task.status === "completed"
        }));
        setTasks(formattedTasks);
      } catch (err) {
        setError("Failed to load tasks. Please refresh the page.");
        console.error("Error loading tasks:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, []);

  // Clear all tasks
  const handleClearTasks = async () => {
    try {
      setLoading(true);
      await Promise.all(tasks.map(task => database.deleteTask(task.id)));
      setTasks([]);
    } catch (err) {
      setError("Failed to clear tasks. Please try again.");
      console.error("Error clearing tasks:", err);
    } finally {
      setLoading(false);
    }
  };

  // Toggle task status
  const handleStatusChange = async (id) => {
    try {
      const task = tasks.find(t => t.id === id);
      const newStatus = !task.done;
      
      await database.updateTask(id, {
        status: newStatus ? "completed" : "open"
      });
      
      setTasks(tasks.map(t => 
        t.id === id ? { ...t, done: newStatus } : t
      ));
    } catch (err) {
      setError("Failed to update task. Please try again.");
      console.error("Error updating task:", err);
    }
  };

  // Remove single task
  const handleTaskRemove = async (id) => {
    try {
      await database.deleteTask(id);
      setTasks(tasks.filter(task => task.id !== id));
    } catch (err) {
      setError("Failed to delete task. Please try again.");
      console.error("Error deleting task:", err);
    }
  };

  // Add new task (called after successful Firestore add)
  const handleAddTask = (newTask) => {
    setTasks(prev => [...prev, {
      id: newTask.id,
      description: newTask.description,
      done: newTask.status === "completed"
    }]);
  };

  return (
    <BrowserRouter>
      <>
        <Header />
        {error && (
          <div className="error-banner" onClick={() => setError(null)}>
            {error}
          </div>
        )}
        
        <Routes>
          <Route
            path="/"
            element={
              loading ? (
                <div className="loading-state">Loading tasks...</div>
              ) : tasks.length === 0 ? (
                <div className="empty-state">No tasks found. Add one to get started!</div>
              ) : (
                <Tasks
                  tasks={tasks}
                  onStatusChange={handleStatusChange}
                  onTaskRemove={handleTaskRemove}
                  onClearTasks={handleClearTasks}
                />
              )
            }
          />
          
          <Route 
            path="/add" 
            element={<Form onAddTask={handleAddTask} />} 
          />
          
          <Route path="/help" element={<Help />}>
            <Route path="" element={<HelpOverview />} />
            <Route path="add" element={<AddHelp />} />
            <Route path="remove" element={<RemoveHelp />} />
            <Route path="change" element={<ChangeHelp />} />
          </Route>
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </>
    </BrowserRouter>
  );
}