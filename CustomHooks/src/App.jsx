import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useTodos } from './customHooks/DatafetchingHook'
import { useIsOnline } from './customHooks/useIsOnline'
import { useDebounce } from './customHooks/useDebounce'

function App() {
  const {todos , loading} = useTodos();
  const isOnline = useIsOnline();
  const [value , setValue] = useState(0);
  const deBounceValue = useDebounce(value,500);

  if(loading) {
    return <div>loading...</div>
  }
  if(isOnline){
    return "you are online"
  }else{
    return "you are offline connect to network"
  }
  return (
    <>
     debounce value is {deBounceValue};
     <input type="text" onClick={(e) => {setValue(e.target.value)}}/>
      {todos.map(todo => <Track todo={todo}/>)}
    </>
  )
}

function Track ({todo}) {
  return <div>
    {todo.title}
    <br />
    {todo.description}
  </div>
}

export default App
