import { useState } from 'react';

const EditTodo = (props) => {

    const [name, setName] = useState(props.data.name);

    const onEditHandle = (e, id) => {
        e.preventDefault();

        props.editTask(id, name)
        setName('');
        props.setIsEditing(false);
    }

    
    const handleChange = (e) => {
        setName(e.target.value);
    }

    return (
    <form className="stack-small" onSubmit={onEditHandle}>
        <div className="form-group">
            <label className="todo-label" htmlFor={props.data.id}>
                New name for {props.data.name}
            </label>
            <input
                id={props.data.id}
                className="todo-text"
                type="text"
                name='name'
                value={name}
                onChange={handleChange}
            />
        </div>
        <div className="btn-group">
            <button
                type="button"
                className="btn todo-cancel"
                onClick={() => props.setIsEditing(false)}>
                Cancel
        <span className="visually-hidden">renaming {props.data.name}</span>
            </button>
            <button
                type="submit"
                className="btn btn__primary todo-edit"
                onClick={(e) => onEditHandle(e, props.data.id,)}
            >
                Save
        <span className="visually-hidden">new name for {props.data.name}</span>
            </button>
        </div>
    </form>
    )
}

export default EditTodo;