import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([
    {
      title: "go to gym",
      description: "at morning 6 AM"
    },
    {
      title: "go to market",
      description: "at evening 6 PM"
    },
    {
      title: "Study DSA",
      description: "STUDY at morning 4 AM"
    }
  ])
  console.log("app got callled");
  
 function addTodo(){
  console.log("addtodo got called");
  setTodos([...todos,{
    title:"new todo added",
    description:"description of new todo"
  }])
 }
  return <div>
    <button onClick={addTodo}>Add a random todo</button>
  {todos.map(function(todo){
    return <Todo title={todo.title} description={todo.description}></Todo>
  })}
  <Dummybutton></Dummybutton>
  </div>
}
function Dummybutton(){
  console.log("re render");
 return <button>asd</button>
}
function Todo(params) {
  console.log("todo got called ");
  return <div>
    <h1>{params.title}</h1>
    <h2>{params.description}</h2>
  </div>
}
function CustomButton(props){

  function clickHandler(){
    props.setCount(props.count + 1);
  }
  return <button onClick={clickHandler}>
    Counter {props.count}
    </button>
}

export default App
