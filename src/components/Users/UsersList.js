import React from "react";

import Card from "../UI/Card";
import styles from './Userlist.module.css'

const UsersList = (props) => {

    let jsd = (<ul>
    {props.users.map((user) => (
        <li key={user.id}>
        {" "}
        {user.username} ({user.age} years old)
        </li>
    ))}
    </ul>)

    if(props.users.length === 0)
        jsd = (<div />)

  return (
    <Card className={styles.users}>
        {jsd}
    </Card>
  );
};

export default UsersList;