const ViewTodo = (props) => {

    return (
        <div className="todo stack-small">
            <div className="c-cb">
                <input id={props.data.id} 
                    type="checkbox" 
                    defaultChecked={props.data.completed}
                    onChange={() => props.toggleTodoCompleted(props.data.id)}
                     />
                <label className="todo-label" htmlFor={props.data.id}>
                    {props.data.name}
        </label>
            </div>
            <div className="btn-group">
                <button 
                    type="button" 
                    className="btn" 
                    onClick={() => props.setIsEditing(true)}
                    >
                    Edit <span className="visually-hidden">Eat</span>
                </button>
                <button 
                    type="button" 
                    className="btn btn__danger"
                    onClick={() => props.deleteTask(props.data.id)}
                    >
                    Delete <span className="visually-hidden">Eat</span>
                </button>
            </div>
        </div>
    )
}


export default ViewTodo;