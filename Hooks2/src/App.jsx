import { useCallback, useMemo, useState ,memo} from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState(1);

const inputFunction = useCallback(() => {
  console.log("hi there");
},[])

  const sum = useMemo(() => {
    let finalSum = 0;
    for (let i = 1; i <= inputValue; i++) {
      finalSum = finalSum + i;
    }
    return finalSum;
  }, [inputValue]);

  return (
    <div>
      <input
        type="text"
        placeholder="1"
        onChange={function (e) {
          setInputValue(e.target.value);
        }}
      />
      <br></br>
      sum of 1 to {inputValue} is {sum}
      <br></br>
      <button onClick={function () {
          setCount(count + 1);
        }}>counter ({count})</button>
      <ButtonComponent inputFunction = {inputFunction}></ButtonComponent>  
    </div>
  );
}

const ButtonComponent = memo(function ({inputFunction}) {
  console.log("re rendered");
  return <div>hi there</div>;
});

export default App;
