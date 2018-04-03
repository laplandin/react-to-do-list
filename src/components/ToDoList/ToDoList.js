import React, { Component } from 'react';
import ToDoItem from '../ToDoItem/ToDoItem'
import AddForm from '../AddForm/AddForm'

class ToDoList extends Component {
    constructor() {
        super();
        this.state = {
            tasks: [
                {
                    name: 'First',
                    description: 'Description for first task'
                }
            ]
        }
    }
    render() {
        return (
            <div className='to-do-list'>
                {this.state.tasks.map((task, index) => {
                    return (
                        <ToDoItem
                            task={task}
                            index={index + 1}
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
    removeTask = (index) => {
        console.log('remove', arguments)
    };

    done = (index) => {
        console.log('done', arguments)
    };

    onTaskAdd = (data) => {
        console.log(data);
        this.setState({
            tasks: this.state.tasks.concat([data])
        })
    }
}

export default ToDoList;