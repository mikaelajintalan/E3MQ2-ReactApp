import { useState } from 'react'
import EditTodo from './EditTodo';
import ViewTodo from './ViewTodo';

const Todo = (props) => {

    const [isEditing, setIsEditing] = useState(false);

    const editingTemplate = (
        <EditTodo 
            data={props.data}
            editTask={props.editTask}
            setIsEditing={setIsEditing}
            />
      );

      const viewTemplate = (
        <ViewTodo
            data={props.data}
            setIsEditing={setIsEditing}
            toggleTodoCompleted={props.toggleTodoCompleted}
            deleteTask={props.deleteTask}
        />
      ); 

    return (
        <li className='todo'>{isEditing ? editingTemplate : viewTemplate}</li>
    )
}

export default Todo;