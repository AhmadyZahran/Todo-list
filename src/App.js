import React, { useRef, useState } from "react"
import app from "./app.css"

function App() {
  const [todo, setTodo] = useState([]);
  const inputRef = useRef()
  const handleTodo = () => {
    const text = inputRef.current.value
    const todos = { complete: false, text }
    setTodo([...todo, todos])
    inputRef.current.value = ""
  }
  const handleTodoEdit = (index) => {
    const newTodo = [...todo]
    newTodo[index].complete = !newTodo[index].complete
    setTodo(newTodo)
  }
  const handleDeleteItem = (index) => {
    const newTodo = [...todo];
    newTodo.splice(index, 1)

    setTodo(newTodo)
  }
  return (
    <div className="project">
      <h1>TODO-LIST</h1>
      <ul>

        {todo.map((item, index) => {

          return (
            <div className="collection">
              <li className={todo[index].complete ? "done" : ""} onClick={() => handleTodoEdit(index)} key={index}>{item.text}</li>
              <span className="span" onClick={() => handleDeleteItem(index)}>🗷</span>
            </div>
          )

        })}
      </ul>
      <input ref={inputRef} placeholder="Enter Todo..."></input>
      <button onClick={handleTodo}>Enter</button>
    </div>
  )
}

export default App