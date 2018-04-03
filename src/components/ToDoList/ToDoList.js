import React, { Component } from 'react';
import update from 'immutability-helper';
import ToDoItem from '../ToDoItem/ToDoItem'
import AddForm from '../AddForm/AddForm'

class ToDoList extends Component {
    constructor() {
        super();
        this.state = {
            tasks: [
                {
                    name: 'First',
                    description: 'Description for first task',
                    status: false
                }
            ]
        }
    }
    removeTask = (index) => {
        console.log('remove', index);
        const updatedTasks = this.state.tasks;
        updatedTasks.splice(index, 1);
        this.setState({tasks: updatedTasks});
    };

    done = (index) => {
        console.log('done', index);
        const updatedTasks = update(this.state.tasks, {[index]: { status: {$set: true}}});
        this.setState({tasks: updatedTasks});
    };

    onTaskAdd = (data) => {
        console.log(data);
        this.setState({
            tasks: this.state.tasks.concat([data])
        })
    };

    render() {
        return (
            <div className='to-do-list'>
                {this.state.tasks.map((task, index) => {
                    return (
                        <ToDoItem
                            key={index}
                            task={task}
                            index={index}
                            removeTask={this.removeTask}
                            done={this.done}
                        >
                        </ToDoItem>
                    )}
                )
                }
                <AddForm onTaskAdd={this.onTaskAdd}></AddForm>
            </div>
        )
    }
}

export default ToDoList;