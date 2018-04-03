import React from 'react'

const ToDoItem = ({ task, index, removeTask, done }) => {
    return (
        <div className='to-do-item'>
            <h3>{index} {task.name}</h3>
            <p>{task.description}</p>
            <button onClick={function (e) {removeTask(index)}}>Удалить задачу</button>
            <button onClick={(e) => done(index)}>Выполнено</button>
        </div>
    )
};

export default ToDoItem;