import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from './AddUser.module.css'
const AddUser =(props) =>{
    const [enteredUserName, setEnteredUserName] = useState('')
    const [enteredAge, setEnteredAge] = useState('')

    const userNameChangeHandler = (event)=>{
        setEnteredUserName(event.target.value)
    }

    const ageChangeHandler = (event)=>{
        setEnteredAge(event.target.value)
    }

    const formAddUserHandler = (event)=>{
        event.preventDefault()
        console.log(enteredUserName,enteredAge )
    }
    return (
        <Card className={classes.input}>
            <h1>Add New User</h1>
            <form onSubmit={formAddUserHandler}>
                <label htmlFor="username">User Name</label>
                <input id ='username' type="text" onChange={userNameChangeHandler} />
                <label htmlFor="age">Age (Years)</label>
                <input id="age" type="number" onChange={ageChangeHandler}/>
                <Button type="submit">Add User</Button>
            </form>
        </Card>
    )
}

export default AddUser