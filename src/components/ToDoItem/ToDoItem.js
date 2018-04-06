import React from 'react'
import Button from 'material-ui/Button';
import styles from './ToDoItem.css'

const style = {
    margin: 12
};

const spanStyle = {
    paddingRight: 5,
    paddingLeft: 5
}

const ToDoItem = ({ task, index, removeTask, done }) => {
    return (
        <div className={task.status ? `${styles.toDoItemDone} to-do-item` : `to-do-item`}>
            <h3>{index + 1} {task.name}</h3>
            <p>{task.description}</p>
            <Button variant="raised" color="primary" onClick={(e) => removeTask(index)} style={style}><span style={spanStyle}>Удалить задачу</span></Button>
            <Button variant="raised" color="primary" onClick={(e) => done(index)}><span style={spanStyle}>Выполнено</span></Button>
        </div>
    )
};

export default ToDoItem;