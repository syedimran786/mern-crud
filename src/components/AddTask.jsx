import axios from 'axios';
import React, { useState } from 'react';

const AddTask = () => {

    let [task,setTask]=useState({userId:"",tname:""});
    let [message,setMessage]=useState("")

    let changeTask=({target:{name,value}})=>
    {
        setTask({...task,[name]:value})
    }

    let submitTask=async (e)=>
    {
        e.preventDefault();

        try
        {
            let addedTask=await axios.post("http://localhost:4500/api/task/addtask",
            task)
            console.log(addedTask.data.message)
            setMessage(addedTask.data.message)
        }
        catch(err)
        {
            console.log(err.response.data.message.split("Path")[1].slice(1));
            setMessage(err.response.data.message.split("Path")[1].slice(1))
        }


    }
    return (
       <>
       <h1>{message}</h1>
         <form onSubmit={submitTask} style={{margin:"100px"}}>
            <input type="text" name="userId" value={task.userId}
            onChange={changeTask} />
            <hr />
            <input type="text" name="tname" value={task.tname} 
             onChange={changeTask}/>
            <hr />
            <button type="submit">Add Task</button>
        </form>
       </>
    );
}

export default AddTask;
