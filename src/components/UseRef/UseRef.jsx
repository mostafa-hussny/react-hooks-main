import { useRef, useState } from "react"

const UseRef = () => {
const inputRef= useRef(null)
const [value, setValue] = useState('')
  return (
    <div>
        <h1>useRef</h1>
        <p>{value}</p>
        <input ref={inputRef} type="text" style={{display:"block", margin:"30px auto"}} placeholder="write something to show"/>
        <button onClick={()=>{
            inputRef.current.focus()
        }}>focus</button>
        <button style={{margin:"0 10px"}} onClick={()=>{
            setValue(inputRef.current.value)
        }}>show</button>
        <button onClick={()=>{
            inputRef.current.value = ""
        }}>clear</button>
        <h3>Explanation: useRef is a reference to DOM elements that can be used to hold information about the element it is assigned to, also can modify the information of the object it holds, in this example we use useRef to focus on the input, access its value and clear it, one good example for this is when we want to implement a search input and a button that when we click we send a GET request with the search keyword.</h3>
    </div>
  )
}

export default UseRef