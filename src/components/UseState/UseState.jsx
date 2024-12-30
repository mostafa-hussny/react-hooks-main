import { useState } from "react";
const UseState = () => {
    let count = 0;
    let [counter, setCounter] = useState(0);
  return (
    <div>
        <h1>useState</h1>
        <h2>before useState</h2>
        <p>{count}</p>
        <button onClick={()=>{count = count+1}}>increment</button>
        <h2>after useState</h2>
        <p>{counter}</p>
        <button onClick={()=>{setCounter(counter+1)}}>increment</button>
        <h3>Explanation: without useState nothing tells React to rerender the component after the variable changes to display the new value, when using useState, whenever the state variable changes it forces react to rerender the part where the state variable is used, the state variable can only be updated using the &quot;set&quot; function destructured from the useState() function.</h3>
    </div>
  )
}

export default UseState