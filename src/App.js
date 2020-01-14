import React, { useState } from 'react';
// import Todo from './todo';
import './App.css';

// function Todo({todo, index}) {
// return <div className="todo">{todo.text}</div>
// }

const Todo = ({todo, index}) => {
return <div className="todo">{todo.text}</div>
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
  ])
  return (
    <div className="App">
      <h2>Hello React Hooks</h2>
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo  key={index} index={index} todo={todo}/>
        ))}
      </div>
    </div>
  )
}
export default App;