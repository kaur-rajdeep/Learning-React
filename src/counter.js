import React,{useState} from "react";
import './index.css';
function Counter(){
    const [count, setCount] = useState(0);
  
    function increment(){
      setCount(count + 1);
    }
    return (<div className="counter">
    <p>{count}</p>
    <button onClick={increment}>Increment</button>
    </div>)
  }

export default Counter