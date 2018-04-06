import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as toDoAction from '../../store/ducks/todos';

const mapStateToProps = (state) => ({todos: state.todos});
const mapDispatchToProps = (dispatch) => bindActionCreators(toDoAction, dispatch);

const style = {
    margin: 12,
};

class NewTaskForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            form: {
                name: '',
                description: ''
            }
        };
        this.onDescriptionInput = this.onDescriptionInput.bind(this);
        this.onNameInput = this.onNameInput.bind(this);
        this.formSubmit = this.formSubmit.bind(this);
    }
    render() {
        return (
            <div className='form-wrapper'>
                <form action="">
                    <h4>New TODO</h4>
                    <TextField
                        value={this.state.form.name}
                        onChange={this.onNameInput}
                        placeholder="TODO caption"
                    /><br />
                    <TextField
                        value={this.state.form.description}
                        onChange={this.onDescriptionInput}
                        placeholder="TODO description"
                    /><br />
                    <Button variant="raised" color="default" onClick={this.formSubmit} label="Create" style={style}>Create</Button>
                </form>
            </div>
        )
    }

    formSubmit(e) {
        e.preventDefault();
        this.props.addToDo({name: this.state.form.name, description: this.state.form.description});
        this.props.onTaskAdd(Object.assign({}, this.state.form));
        const form = this.state.form;
        form.name = '';
        form.description = '';
        this.setState({ form });
    }

    onNameInput(e) {
        console.log(e, this);
        let form = { ...this.state.form };
        form.name = e.target.value;
        this.setState({ form })
    }
    onDescriptionInput(e) {
        let form = { ...this.state.form };
        form.description = e.target.value;
        this.setState({ form })
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(NewTaskForm);