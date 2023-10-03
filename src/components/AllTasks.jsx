import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AllTasks = () => {

    let [tasks,setTasks]=useState([]);

    useEffect(()=>
    {
        async function getTasks()
        {
           try
           {
            let {data:{data}}=await axios.get("http://localhost:4500/api/task/tasks");
            setTasks(data)
           }
           catch(err)
           {
            console.log(err)
           }

        }
        getTasks()
    },[])

    let navigate=useNavigate()
    let navigateToUpdateTask=(id)=>
    {
        console.log(id);
        navigate(`/updatetask/${id}`)
    }
    return (
        <div>
            {tasks.map(({tname,_id})=>
            {
                return <li type="1" key={_id}>{tname} <button onClick={()=>{navigateToUpdateTask(_id)}}>Update</button></li>
            })}
        </div>
    );
}

export default AllTasks;
