import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from './AddUser.module.css'
const AddUser =(props) =>{
    const [enteredUserName, setEnteredUserName] = useState('')
    const [enteredUserAge, setEnteredUserAge] = useState('')

    const userNameChangeHandler = (event)=>{
        setEnteredUserName(event.target.value)
    }

    const ageChangeHandler = (event)=>{
        setEnteredUserAge(event.target.value)
    }

    const formAddUserHandler = (event)=>{
        event.preventDefault()
        if(enteredUserName.trim().length===0 || enteredUserAge.trim().length===0){
            return
        }

        if(+enteredUserAge.trim()<1){
            return
        }
        // console.log(enteredUserName,enteredUserAge )
        const addData = {
            userName: enteredUserName,
            userAge: enteredUserAge,
          };
        // props.onAddUser(enteredUserName,enteredUserAge)
        props.onAddUser(addData)
        setEnteredUserAge('')
        setEnteredUserName('')
    }
    return (
        <Card className={classes.input}>
            <h1>Add New User</h1>
            <form onSubmit={formAddUserHandler}>
                <label htmlFor="username">User Name</label>
                <input id ='username' type="text" value={enteredUserName} onChange={userNameChangeHandler} />
                <label htmlFor="age">Age (Years)</label>
                <input id="age" type="number" value={enteredUserAge} onChange={ageChangeHandler}/>
                <Button type="submit">Add User</Button>
            </form>
        </Card>
    )
}

export default AddUser