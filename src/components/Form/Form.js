import { useState } from "react";
import "../Form/Form.scss";
import { IoMdAddCircle } from "react-icons/io";
import { addTask } from "../../database";

function Form({ onAddTask }) {
  const [inputValue, setInputValue] = useState("");
  const [option, setOption] = useState("open");
  const [error, setError] = useState("");
  const [isSaving, setIsSaving] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (inputValue.trim() === "") {
      setError("Enter a description");
      return;
    }

    setIsSaving(true);
    setError("");

    try {
      // Save to Firestore first
      const newTask = await addTask({
        description: inputValue,
        status: option,
      });

      // Only update local state after successful Firestore save
      // Call onAddTask to pass the task data to the parent component
      onAddTask({
        id: newTask.id, // using Firestores ID
        description: newTask.description,
        status: newTask.status === "completed",
      });

      //Reset form

      setInputValue("");
      setOption("open");
      setError("");
    } catch (error) {
      console.error("Error saving task:", error);
      setError("Failed to save task. Please try again.");
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add a new task </h2>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <label htmlFor="inputValue">
        Description:
        <input
          id="inputValue"
          maxLength={150}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          type="text"
          disabled={isSaving}
        />
      </label>

      <label htmlFor="status">
        {" "}
        Status:
        <select
          id="status"
          value={option}
          onChange={(e) => setOption(e.target.value)}
          disabled={isSaving}
        >
          <option value="open">Open</option>
          <option value="completed">Completed</option>
        </select>
      </label>

      <button type="submit" id="add">
        {isSaving ? (
          "Saving..."
        ) : (
          <>
            <IoMdAddCircle className="icon" /> Add
          </>
        )}
      </button>
      {isSaving && <p className="saving-message">Saving task to database...</p>}
    </form>
  );
}
export default Form;
