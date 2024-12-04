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
  function addTodo(){
    setTodos([...todos,{
      title :"new todo added",
      description: "description of new todo "
    }])
  }
  
  return (
    <div>
      <button onClick={addTodo}>Get a random Todo</button>
     {/* <CustomButton count={count} setCount={setCount}></CustomButton> */}
    {todos.map(function(todo){
      return <Todo title={todo.title} description={todo.description}/>
    })}
    </div>
  )
}

function Todo(props){
  return <div>
    <h1>{props.title}</h1>
    <h2>{props.description}</h2>
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
