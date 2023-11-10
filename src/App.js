import { useState } from "react";
import { useRef } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([])
  const inputRef = useRef()
  const handleToDo = () => {
    const text = inputRef.current.value;
    const newItem = { complete: false, text }
    setTodos([...todos, newItem])
    inputRef.current.value = ""
   
  }
  const handleItem = (index) => {
    const newTodos = [...todos];
    newTodos[index].complete = !newTodos[index].complete;
    setTodos(newTodos)
    
  }
  const handleDeleteItem = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1)
    setTodos(newTodos)
  }
  return (
    <div className="App">
      <h2>To-Do-List</h2>
      <div className="to-do-contianer">
        <ul>
          {todos.map(({ text, complete }, index) => {
            return (
              <div className="flex">
                <li key={index} className={complete ? "done" : ""} onClick={() => handleItem(index)}> {text}</li>
                <span className="haneen" onClick={() => handleDeleteItem(index)}>X</span>
              </div>)
          })}
        </ul>
        <input ref={inputRef} type='text' placeholder='Enter The Task'></input>
        <button onClick={handleToDo}>Press</button>
      </div>
    </div>
  );
}

export default App;
