import React from 'react'
import RaisedButton from 'material-ui/RaisedButton';
import './ToDoItem.css'

const style = {
    margin: 12,
    paddingRight: 5,
    paddingLeft: 5
};

const ToDoItem = ({ task, index, removeTask, done }) => {
    return (
        <div className={task.status ? `to-do-item to-do-item--done` : `to-do-item`}>
            <h3>{index + 1} {task.name}</h3>
            <p>{task.description}</p>
            <RaisedButton onClick={function (e) {removeTask(index)}} style={style}>Удалить задачу</RaisedButton>
            <RaisedButton onClick={(e) => done(index)} style={style}>Выполнено</RaisedButton>
        </div>
    )
};

export default ToDoItem;