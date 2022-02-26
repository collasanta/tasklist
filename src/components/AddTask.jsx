import React, { useState } from 'react';
import './AddTask.css';
import Button from './Button';

const AddTask = ({handleTaskAddition}) => {
   const [inputData, setInputData] = useState(""); //CREATE STATE TO STORE NEW TASKS 

   const handleInputChange = (e) => {
      setInputData(e.target.value); //SET STATE TO NEW VALUE WHEN INPUT HAVE CHANGES
   };

   const handleAddTaskClick = () => {
      handleTaskAddition(inputData); //CALL FUNCTION ON BUTTON CLICK TO ADD NEW TASK TO TASKS LIST 
      setInputData("");
   };

   return (  
      <div className='add-task-container'>

         <input 
            onChange={handleInputChange}
            value={inputData}
            className="add-task-input"   
            type= "text" 
         />
         
         <div className="add-task-button-container">
            <Button onClick={handleAddTaskClick}> Add Task </Button>
         </div>

      </div>

   );
};
 
export default AddTask;