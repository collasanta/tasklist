import React from 'react';
import './Button.css'

//NAMES THE COMPONENT AND EXECUTE ONCLICK FUNCTION TO ADD NEW TASK TO TASKS LIST
const Button = ({children, onClick}) => {
   return ( 
         <button onClick={onClick} className='button'>
            {children} 
         </button>

    );
}
 
export default Button;