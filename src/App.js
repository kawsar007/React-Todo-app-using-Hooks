import React, { useState } from 'react';
// import Todo from './todo';
import './App.css';

function Todo({todo, index, completeTodo, deleteTodo}) {
return <div style={{textDecoration: todo.isCompleted ? 'line-through' : ''}}
 className="todo">{todo.text}
 <div>
   <button onClick={() => completeTodo(index)}>Complete</button>
   <button onClick={() => deleteTodo(index)}>X</button>
 </div>
 </div>
}

     //  Form
function TodoForm({addTodo}) {
  const [ value, setValue ] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if(!value) return;
    addTodo(value);
    setValue('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" className="input" value={value} placeholder="Add todo..." onChange={e => setValue(e.target.value)}/>
    </form>
  )
}

const App = () => {
  const [ todos, setTodos ] = useState([
    {
       text: 'Learn about React',
       isCompleted: false
    },
    {
      text: 'Meet friend for lunch',
      isCompleted: false
   },
   {
    text: 'Build really cool todo app',
    isCompleted: false
   }
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  }

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  }

  // remove todos
  const deleteTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  return (
    <div className="app">
      <h2>Hello React Hookss</h2>
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo  key={index} index={index} todo={todo}
           completeTodo={completeTodo}
           deleteTodo={deleteTodo}
           />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  )
}
export default App;