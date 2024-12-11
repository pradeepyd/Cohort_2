import { useContext, useState } from "react";
import "./App.css";
import { CountContext } from "./components/Contextapi.js";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <CountContext.Provider value={{count,setCount}}>
         <Count />
      </CountContext.Provider>
    </div>
  );
}

function Count() {
  return (
    <div>
      <CountRender></CountRender>
      <CountButtons></CountButtons>
    </div>
  );
}

function CountRender() {
  const {count} = useContext(CountContext);

  return <div>{count}</div>;
}

function CountButtons() {
  const {count,setCount} = useContext(CountContext);

  return (
    <div>
      <button onClick={() => {setCount(count => count + 1)}}>increase</button>
      <button onClick={() => {setCount(count => count - 1)}}>decrease</button>
    </div>
  )
}

export default App;
