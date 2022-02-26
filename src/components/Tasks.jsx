import React from 'react';
import Task from "./Task";

//FOR EACH ITEM OF THE TASKS LIST ARRAY, PASS THIS ITEM AS PROPS TO THE TASK COMPONENT, AND PRINT A TASK COMPONENT
const Tasks = ({ tasks, handleTaskClick, handleTaskDeletion }) => { 
   return (
   <>
      {tasks.map((task) => (
         <Task key={task.id} task={task} handleTaskClick= {handleTaskClick} handleTaskDeletion={handleTaskDeletion}/> 
      ))} 

   </>
   );
};

export default Tasks;