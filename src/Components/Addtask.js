import './Addtask.css'
import React ,{useState}from 'react'
import axios from 'axios'
function Addtask(props) {
    const [task,Settask] = useState("")
    const addtask = () => {
        if(task.trim() === ''){   //removes white space in font and back
            return 
        } else {
            axios.post('http://localhost:8000/api/tasks' , {
                todo : task,
                isComplete : false
            }).then(res => {
                Settask("")
                props.addTask(res.data)
            }).catch(err => console.log(err))
        }
    }
    return (
        <>
        <h2>Todo List</h2>
        <div className = 'addtask'>
            <input type='text' placeholder = 'Add Task . . .' value = {task} onChange = {event => Settask(event.target.value)}/>
            <button onClick = {() => addtask()}>Add Task</button>
        </div>
        </>
    )
}

export default Addtask