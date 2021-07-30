import Button  from '../UI/Button';
import './AddUsers.css';
import ErrorModal from '../UI/ErrorModal';
import React, {useState} from 'react';
const AddUsers = (props) =>{
    
    const [enteredUserName,setEnteredUserName] = useState('');
    const [enteredUserAge,setEnteredUserAge] = useState('');
    const[error,setError] = useState();
    const onAddUserNameHandler = (event) =>
    {
            setEnteredUserName(event.target.value);
    };

    const onAddUserAgeHandler = (event) =>{
        setEnteredUserAge(event.target.value);
    };

    const onSubmitHandler = (event) =>{
        event.preventDefault();
        if(enteredUserName.trim().length === 0 || enteredUserAge.trim().length===0)
        {
            setError({
                title:"Invali input",
                message:"Please enter a valid name and age (non-empty) values",
            })
            return;
        }
        if(enteredUserAge< 1 )
        {
            setError({
                title:"Invald age",
                message:"Please enter a valid age (> 0)",
            })
            return;
        }
        const userlist = [
            {
                name:enteredUserName,
                age:+enteredUserAge,
                id:Math.random(),
            }
        ];
    props.onAddUser(userlist);
    setEnteredUserName('');
    setEnteredUserAge('');
    };

    const errorHandler = () =>{
        setError(null);
    }
    return(
        <div>
        {error && <ErrorModal onConfirm={errorHandler} title={error.title} message={error.message}/>}
        <form className="user-form" onSubmit={onSubmitHandler}>
            <label>User name</label>
            <input className="input-ele" value={enteredUserName} type="text" onChange={onAddUserNameHandler}/>
            <div>
              <label>Age (Years)</label>
              <input className="input-ele" type="text" value={enteredUserAge} onChange={onAddUserAgeHandler}/><br></br>
            </div>
            <Button type="submit">Add User</Button>
      </form >
      </div>
    )

}
export default AddUsers;