import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios"

function App() {
  const [count, setCount] = useState(0);
  const [selectedId, setSelectedId] = useState(1);
  
  return (
    <div>
      <button onClick={function(){
        setSelectedId(1);
      }}>1</button>
      <button onClick={function(){
        setSelectedId(1);
        }}>2</button>
      <button onClick={function(){
        setSelectedId(1);
        }}>3</button>
      <button onClick={function(){
        setSelectedId(1);
        }}>4</button>
      
      <Todo id={selectedId} />
    </div>
  );
}
function Todo({ id }) {
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`)
    .then(function (response) {
      setTodo(response.data.todo);
    });
  }, [id]);

  return (
    <div>
      <h1>{todo.title}</h1>
      <h3>{todo.description}</h3>
    </div>
  );
}
export default App;
