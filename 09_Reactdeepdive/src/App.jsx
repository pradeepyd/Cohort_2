import React,{ useState,memo } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [title, setTitle] = useState("Pradeep")
function addHeader(){
  setTitle(Math.random() )
}
  return (
   <div>
    <button onClick={addHeader}>Click me to change the title</button>
    <Header title={title} ></Header>
    <Header title="yadav"></Header>
    <Header title="yadav"></Header>
    <Header title="yadav"></Header>
    <Header title="yadav"></Header>
   </div>
  )
}

const Header = React.memo(function Header({title}){
  return <div>
   My name is {title}
  </div>
})
export default App
