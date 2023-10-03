import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';


const UpdateTask = () => {

    let [task,setTask]=useState({userId:"",tname:""});
    let [message,setMessage]=useState("")

    let changeTask=({target:{name,value}})=>
    {
        setTask({...task,[name]:value})
    }

    let navigate=useNavigate();
   let {id}=useParams();

   useEffect(()=>
   {
       async function getTask()
       {
          try
          {
           let {data:{data:{userId,tname}}}=await axios.get(`http://localhost:4500/api/task/task/${id}`);
           setTask({...task,userId,tname})
          }
          catch(err)
          {
           console.log(err)
          }

       }
       getTask()
   },[])

    let updateTask=async (e)=>
    {
        e.preventDefault();

        try
        {
            let updatedTask=await axios.put(`http://localhost:4500/api/task/updatetask/${id}`,
            task)
            console.log(updatedTask.data.message)
            setMessage(updatedTask.data.message)
        }
        catch(err)
        {
            console.log(err.response.data.message.split("Path")[1].slice(1));
            setMessage(err.response.data.message.split("Path")[1].slice(1))
        }

        
        navigate("/alltask")
    }
    return (
       <>
       <h1>{message}</h1>
         <form onSubmit={updateTask} style={{margin:"100px"}}>
            <input type="text" name="userId" value={task.userId}
            onChange={changeTask} />
            <hr />
            <input type="text" name="tname" value={task.tname} 
             onChange={changeTask}/>
            <hr />
            <button type="submit">Update Task</button>
        </form>
       </>
    );
}

export default UpdateTask;
