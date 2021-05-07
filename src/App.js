import { Fragment, useState, useEffect } from 'react';
import './App.css';
import FilterButton from './FilterButton';
import Form from './Form';
import Todo from './Todo';

const App = () => {

  const [todoItems, setTodoItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect( () => {

    const result = fetch('http://localhost:58150/api/toDo')
                    .then(res => {
                        setIsLoading(true);
                        return res.json();
                    }).then(r => {
                        setTodoItems(r);
                        setIsLoading(false);
                    })
  },[])

  const [filter, setFilter] = useState('All');

  const FILTER_MAP = {
    All: () => true,
    Active: todoItem => !todoItem.completed,
    Completed: todoItem  => todoItem.completed
  }

  const FILTER_NAMES = Object.keys(FILTER_MAP);

  const filterList = FILTER_NAMES.map(name => (
    <FilterButton 
      key={name} 
      name={name}
      isPressed={name === filter}
      setFilter={setFilter}
      />
  ))


  //we should make this functions

  const deleteTask = (id) => {
    let filtered = todoItems.filter( (f) => f.id !== id);
    setTodoItems(filtered);
  }

  const editTask = (id,newName) => {
    const todoList = todoItems.map( (todo) => {

      if(id === todo.id){
        return {...todo, name: newName};
      }

      return todo;
    });

    setTodoItems(todoList);
  }

  const toggleTodoCompleted = (id) => {
    const todoList = todoItems.map( (todo) => {

      if(id === todo.id){
        return {...todo, completed: !todo.completed};
      }

      return todo;
    });

    setTodoItems(todoList);
  }


  //renders a todo items list
  const todos = todoItems
    .filter(FILTER_MAP[filter])
    .map((d) => (
    <Todo
      key={d.id}
      data={d}
      deleteTask={deleteTask}
      editTask={editTask}
      toggleTodoCompleted={toggleTodoCompleted}
       />
  ));

  const addTask = (name) => {

      let id = Math.random() * 9999;
      let task = {
         id: "todo-" + id, name: name, completed: false 
      }

      setTodoItems([...todoItems, task]);
  }




  return (
    <div className="todoapp stack-large">
      <h1>ToDo App</h1>
      
      <Form addTask={addTask}  />

      <div className="filters btn-group stack-exception">
       { filterList}
        

      </div>
      <h2 id="list-heading">
        {todoItems.filter(i => i.completed !== true).length } tasks remaining
      </h2>

      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
      {todos}
      </ul>
    </div>
  );






}

export default App;