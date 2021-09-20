import { useState } from "react";
import Display from "./components/Display";
import FormComp from "./components/FormComp";

const App = () => {

  const [userList, setUserList] = useState([]);

  const addUserHandler = (userName, userAge) => {

    setUserList((previousState) => {
      return [...previousState, { id: Math.floor(Math.random() * 10), name: userName, age: userAge }]
    })

  }
  return (
    <div>

      <FormComp onAddUser={addUserHandler}></FormComp>
      <Display users={userList} />
    </div>
  )
}


export default App;