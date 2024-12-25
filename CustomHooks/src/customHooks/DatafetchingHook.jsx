import { useState,useEffect } from "react";
import axios from "axios"

export function useTodos(n){
    const [todos, setTodos] = useState([])
    const [loading ,setLoading] = useState(true);
  
    useEffect(() => {
      const value = setInterval(() => {
        axios.get("https://sum-server.100xdevs.com/todos")
        .then(res => {
          setTodos(res.data.todos);
          setLoading(false);
        })
      },n * 1000)
      axios.get("https://sum-server.100xdevs.com/todos")
        .then(res => {
          setTodos(res.data.todos);
          setLoading(false);
        })
  
      return ()=>{
        clearInterval(value);
      }
    },[n])
  
    return {todos , loading};
  }
  