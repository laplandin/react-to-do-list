import React, { Component } from 'react';
import update from 'immutability-helper';
import ToDoItem from '../ToDoItem/ToDoItem'
import AddForm from '../AddForm/AddForm'
import styles from './toDoList.css'

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as toDoAction from '../../store/ducks/todos';

const mapStateToProps = (state) => ({todos: state.todos});
const mapDispatchToProps = (dispatch) => bindActionCreators(toDoAction, dispatch);

class ToDoList extends Component {
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
            <div className={styles.toDoList}>
                {this.props.todos.map((task, index) => {
                    return (
                        <ToDoItem
                            key={index}
                            task={task}
                            index={index}
                            removeTask={this.props.removeToDo}
                            done={this.props.toggleToDo}
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

export default connect(mapStateToProps,mapDispatchToProps)(ToDoList);