import React from 'react'
import './ToDoItem.css'

const ToDoItem = ({ task, index, removeTask, done }) => {
    return (
        <div className={task.status ? `to-do-item to-do-item--done` : `to-do-item`}>
            <h3>{index + 1} {task.name}</h3>
            <p>{task.description}</p>
            <button onClick={function (e) {removeTask(index)}}>Удалить задачу</button>
            <button onClick={(e) => done(index)}>Выполнено</button>
        </div>
    )
};

export default ToDoItem;