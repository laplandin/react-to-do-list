import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

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
        this.onSubmit = this.onSubmit.bind(this);
    }
    render() {
        return (
            <div className='form-wrapper'>
                <form action="">
                    <TextField
                        value={this.state.form.name}
                        onChange={this.onNameInput}
                        hintText="Введите имя задачи"
                        floatingLabelText="Введите имя задачи"
                    /><br />
                    <TextField
                        value={this.state.form.description}
                        onChange={this.onDescriptionInput}
                        hintText="Введите описание задачи"
                        floatingLabelText="Введите описание задачи"
                    /><br />
                    <RaisedButton onClick={this.onSubmit} label="Create" primary={true} style={style}/>
                </form>
            </div>
        )
    }

    onSubmit(e) {
        e.preventDefault();
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
export default NewTaskForm;