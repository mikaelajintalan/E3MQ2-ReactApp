import { useState } from 'react'

const Form = (props) => {

    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        props.addTask(name)
        setName('');
    }

    const handleChange = (e) => {
        setName(e.target.value);
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2 className="label-wrapper">
                <label htmlFor="new-todo-input" className="label__lg">
                    List down what you are going to do.
        </label>
            </h2>
            <input
                type="text"
                id="new-todo-input"
                className="input input__lg"
                name="name"
                autoComplete="off"
                value={name}
                onChange={handleChange}
            />
            <button type="submit" className="btn btn__primary btn__lg">
                Add
            </button>
        </form>
    )
}

export default Form;