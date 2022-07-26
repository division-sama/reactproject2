import React , {useState} from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {

  const [userList, setUserList] = useState([]);

  const submithandler = (uName, uAge) => {
    setUserList(
      (userList) => {
        return [{ id:Math.random(), username:uName, age:uAge }, ...userList]
      }
    );
  };

  return (
    <div>
      <AddUser onSubmit = {submithandler} ></AddUser>
      <UsersList users = {userList}></UsersList>
    </div>
  );
}

export default App;
