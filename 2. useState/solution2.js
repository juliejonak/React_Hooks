import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

// Random ID generator
function generateId () {
  return "_" + Math.random().toString(36).substr(2,9)
}

function Todo () {
  const [todos, setTodos] = React.useState([])
  const [input, setInput] = React.useState("")

  const saveInput = (e) => setInput(e.target.value)

  const addItem = () => {
    setTodos( (todos) => todos.concat({
      text: input,
      id: generateId()
    }))

    setInput("")
  }

  const removeItem = (id) => {
    setTodos( (todos) => todos.filter( (item) => item.id !== id ))
  }
  
  return (
    <div>
      <input 
        type="text"
        value={input}
        placeHolder="New Todo"
        onChange={saveInput}
      />
      <p>Input is: {input}</p>
      <button onClick={addItem}>Add to list</button>

      <ul>
        {todos.map(({text, id}) => (
          <li key={id}>
            <span>{text}</span>
            <button onClick={() => removeItem(id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Todo />, rootElement);
