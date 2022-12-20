import React from 'react'

const Task = (props) => {
    return (
        <div>
            <h1 style={{ backgroundColor: props.complete ? "green" : "white" }}>{props.taskName}</h1>
            <button onClick={() => props.completeTask(props.id)}>complete</button>
            <button onClick={() => props.deleteTask(props.id)}>delete</button>
        </div>
    )
}

export default Task