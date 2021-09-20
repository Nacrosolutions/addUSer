import Card from "./UI/Card";

import classes from './FormComp.module.css';
import Buttton from "./UI/Button";
import { useState } from "react";
import ErrorModal from "./UI/ErrorModal";
const FormComp = (props) => {

  const [enterUserName, setUserName] = useState('');

  const [enterAge, setAge] = useState('');

  const [error, setError] = useState();
  const submitChangeHandler = (event) => {
    event.preventDefault();
    if (enterUserName.trim().length === 0 || enterAge.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please entet the validname and age'
      })
      return;
    }

    if (+enterAge < 1) {
      setError({
        title: 'Invalid agr',
        message: 'Please enter the vaild age'
      })
      return;
    }
    props.onAddUser(enterUserName, enterAge);
    setUserName('');
    setAge('');





  }
  const userNameHadler = (event) => {
    setUserName(event.target.value);
  }


  const ageHandler = (event) => {
    setAge(event.target.value);
  }

  const errorHandler = () => {
    setError(null);
  }

  return (
    <div>
      {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}

      <Card className={classes.input}>

        <form onSubmit={submitChangeHandler}>

          <label htmlFor="userName">Username</label>
          <input id="username" type="text" onChange={userNameHadler} value={enterUserName} />

          <label htmlFor="age">Age(Years)</label>
          <input id="age" type="number" onChange={ageHandler} value={enterAge} />

          <Buttton type="submit" >Add User</Buttton>
        </form>
      </Card>
    </div>

  )

};

export default FormComp;