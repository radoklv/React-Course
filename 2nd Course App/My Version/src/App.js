import { useState } from 'react';
import './App.css';
import UserForm from './components/UserForm';
import UserList from './components/UserList/UserList';

function App() {
  const [users, setUsers] = useState([
    {
      id: 'hj498t34j',
      username: 'Radoslav',
      age: 24,
    },
  ]);


  const addUserHandler = (newUser) =>{
    setUsers((oldState) =>{
      return [...oldState, newUser]
    })
  }

  return (
    <div className="app">
      <UserForm onAdd={addUserHandler}/>
      <UserList users={users} />
    </div>
  );
}

export default App;
