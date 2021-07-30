import '../UI/Button.css';
//import React, {useState} from 'react';

const Button = (props) =>{
  
    return(
            <button className="buttn" type={props.type || 'button'} onClick={props.onClick} >{props.children}</button>
    );
    
}
export default Button;