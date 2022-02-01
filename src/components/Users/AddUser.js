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
        if(enteredUserName.trim().length===0 || enteredAge.trim().length===0){
            return
        }

        if(+enteredAge.trim()<1){
            return
        }
        console.log(enteredUserName,enteredAge )
        setEnteredAge('')
        setEnteredUserName('')
    }
    return (
        <Card className={classes.input}>
            <h1>Add New User</h1>
            <form onSubmit={formAddUserHandler}>
                <label htmlFor="username">User Name</label>
                <input id ='username' type="text" value={enteredUserName} onChange={userNameChangeHandler} />
                <label htmlFor="age">Age (Years)</label>
                <input id="age" type="number" value={enteredAge} onChange={ageChangeHandler}/>
                <Button type="submit">Add User</Button>
            </form>
        </Card>
    )
}

export default AddUser