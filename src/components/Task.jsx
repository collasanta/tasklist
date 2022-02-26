import React from 'react';
import './Task.css'
import { CgClose, CgInfo }  from 'react-icons/cg';
import {useHistory} from 'react-router-dom'

//RECEIVE A INDIVIDUAL ITEM FROM THE TASKS LIST ARRAY AND PRINT ITS TITLE
const Task = ({task, handleTaskClick, handleTaskDeletion}) => {
   const history = useHistory();

   const handleTaskDetailsClick = () => {
      history.push(`/${task.title}`)
   };

   return ( 

      <>
         <div className='total-container'>
            <div
               className='task-container'
               onClick={ () => handleTaskClick(task.id)}
               // style={task.completed ? { borderLeft: '30px solid chartreuse'} : {}}
            >
               <div className='task-title-total' style={task.completed ? { borderLeft: '30px solid chartreuse'} : {}}>
                  <div className='task-title' >
                     {task.title}
                  </div>
               </div>
            </div>

            <div className='buttons-container' >
                  <button 
                     className="remove-task-button"
                     onClick={ () => handleTaskDeletion(task.id)}>
                     <CgClose/>
                  </button>

                  <button 
                     className="see-task-details-button"
                     onClick={ handleTaskDetailsClick}
                     >
                     <CgInfo />
                  </button>
            </div>
         </div>
      </>
      


    );
}
 
export default Task ;