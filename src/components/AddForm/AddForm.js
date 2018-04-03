import React, { Component } from 'react';

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
                    <input
                        value={this.state.form.name}
                        onChange={this.onNameInput}
                        type="text"
                        placeholder='Введите имя задачи'
                    />
                    <input
                        value={this.state.form.description}
                        onChange={this.onDescriptionInput}
                        type="text"
                        placeholder='Введите описание задачи'
                    />
                    <button onClick={this.onSubmit}>Сохранить</button>
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