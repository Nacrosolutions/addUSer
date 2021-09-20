import Card from "./UI/Card";

import classes from './Display.module.css';

const Display = (props) => {

  console.log(props.users)

  return (
    <Card className={classes.users}>
      <ul>

        {props.users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  )

}



export default Display;