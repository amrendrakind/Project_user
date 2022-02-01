import React from "react";

const AddUser =(props) =>{
    const formAddUserHandler = (event)=>{
        event.preventDefault()
    }
    return (
        <div>
            <h1>Add New User</h1>
            <form onSubmit={formAddUserHandler}>
                <label htmlFor="username">User Name</label>
                <input id ='username' type="text" />
                <label htmlFor="age">Age (Years)</label>
                <input id="age" type="number" />
                <button type="submit">Add User</button>
            </form>
        </div>
    )
}

export default AddUser