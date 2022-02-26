import React from 'react';
import Button from "./Button";
import { useHistory, useParams } from "react-router-dom";
import "./TaskDetails.css"

const TaskDetails = () => {
   const params = useParams();
   const history = useHistory();

const handleBackButtonClick = () => {
   history.goBack();
};

   return (
      <>
      <div className="back-button-container">
         <Button onClick={handleBackButtonClick}>Back</Button>
      </div>
      <div className="task-details-container">
         <p><h2>{params.taskTitle}</h2></p>
         <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe autem quo itaque nisi nobis nesciunt.
         </p>
      </div>
      </>
     );
}
 
export default TaskDetails;