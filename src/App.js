import React, { useState , Fragment} from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (addData) => {
    //userName, userAge
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        {
          name: addData.userName,
          age: addData.userAge,
          id: Math.random().toString(),
        },
      ];
    });
  };

  return (
    <Fragment>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </Fragment>
  );
}

export default App;
