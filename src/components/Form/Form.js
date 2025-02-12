import { useState } from "react";

function Form (){
    const[inputValue, setInputValue] = useState("");
    const[option, setOption] = useState("open");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim() === ""){
            setError("Enter a description");

        } else {
            setError('');
        }
        
        

        setInputValue("");
        setOption("open");
    }
return (
    <form onSubmit={handleSubmit}>
        <h2>Add a new task </h2>
      
        {error !== '' && (<div> {error}</div>)}
       
       
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
        
        <button type="submit" id="add">Add</button>
        
    </form>
)
}
export default Form;