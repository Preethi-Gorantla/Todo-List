import './App.css';
import AddUsers from '../src/components/Users/AddUsers';
import Card from '../src/components/UI/Card';
//import Form from '../src/components/Form';
import UsersList from './components/Users/UserList';
import React, { useState } from 'react';

const dummy_data = [
    {
    name:'Preethi',
    age:22,
    id:1
    },
    {
      name:'Anand',
      age:20,
      id:2
    }
  ];

function App(props) {
  const [userslist,setNewUser] = useState(dummy_data);
  console.log(userslist);
  const onAddUserList = (userlist) =>{
     setNewUser(prevUsers =>{

      return [...userlist, ...prevUsers]
    });
  }
  
  return (
    <div className="App">
      <Card>
        <AddUsers onAddUser={onAddUserList}/>
      </Card>
      <UsersList items={userslist}/>
    </div>
  );
}

export default App;
