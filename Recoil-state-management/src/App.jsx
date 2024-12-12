import { useContext, useState } from "react";
import "./App.css";
import { CountContext } from "./components/Contextapi.js";
import { countAtom, evenSelector } from "./store/atoms/count.jsx";
import {
  RecoilRoot,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";

function App() {
  return (
    <div>
      <RecoilRoot>
        <Count />
      </RecoilRoot>
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
  const count = useRecoilValue(countAtom);

  return (
    <div>
      {count}
      <EvenCountRender></EvenCountRender>
    </div>
  );
}

function EvenCountRender() {
  const isEven = useRecoilValue(evenSelector);
  return <div>{isEven ? "it is even" : null}</div>
}

function CountButtons() {
  const setCount = useSetRecoilState(countAtom);
  return (
    <div>
      <button
        onClick={() => {
          setCount((count) => count + 1);
        }}
      >
        increase
      </button>
      <button
        onClick={() => {
          setCount((count) => count - 1);
        }}
      >
        decrease
      </button>
    </div>
  );
}

export default App;
