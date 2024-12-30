import { createContext, useState, useRef, useContext } from "react"


const AppContext = createContext({})

const User = () => {
    const {username} = useContext(AppContext)
    return (
        <div>
            <h3>username: {username}</h3>
        </div>
    )

}

const Login = () => {
    const inputRef = useRef(null)
    const {setUsername} = useContext(AppContext)
    return (
        <div>
            <input ref={inputRef} style={{display:"block", margin:"10px auto"}} type="text" placeholder="username"/>
            <button onClick={()=>{
                setUsername(inputRef.current.value)
            }}>login</button>
        </div>
    )
}
const UseContext = () => {
    const [username, setUsername] = useState('')
  return (
    <AppContext.Provider value={{username, setUsername}}>
        
            <h1>useContext</h1>
            <User/>
            <Login/>
            <h3>Explanation: context api is a global state management method, instead of passing values, functions and states through children and their children...etc, context api makes a state that holds anything we want accessible through all children of the parent with just using useContext hook, this is useful for example in the situation when the app has a logged in user and we want to share his information among all children.</h3>
    </AppContext.Provider>
  )
}

export default UseContext