import { useState } from "react";
import '../Form/Form.scss';
import { IoMdAddCircle } from "react-icons/io";

function Form ({ onAddTask }){
    const[inputValue, setInputValue] = useState("");
    const[option, setOption] = useState("open");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (inputValue.trim() === ""){
            setError("Enter a description");
            return;
        }

       // Call onAddTask to pass the task data to the parent component
       onAddTask({ description: inputValue, status: option });

        setInputValue("");
        setOption("open");
        setError("");  
    }
return (
    <form onSubmit={handleSubmit}>
        <h2>Add a new task </h2>
      
        {error && <p style={{ color: "red" }}>{error}</p>}
       
       
        <label htmlFor="inputValue">Description: 
        <input 
        id= "inputValue"
        maxLength={150} 
        value= {inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        type='text'
        
        />
        </label>
        


        <label htmlFor="status"> Status:
        <select 
        id="status"
        value= {option}
        onChange={(e) => setOption(e.target.value)}
        >  
        
         <option value="open">Open</option>
         <option value="completed">Completed</option>

        </select>
        </label>
        
        <button type="submit" id="add"> <IoMdAddCircle className="icon"/> Add</button>
        
    </form>
)
}
export default Form;