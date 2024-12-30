import {useState, useReducer} from 'react'

const reduce = (state, action) => {
    switch(action.type){
        case 'increment':
            return {...state, count: state.count + 1}
        case 'toggle':
            return {...state, showText: !state.showText}
        default:
            return state
    }

}

const UseReducer = () => {
    const [count, setCount] = useState(0)
    const [showText, setShowText] = useState(false)
    const [state, dispatch] = useReducer(reduce, {count: 0, showText: false})
  return (
    <div>
        <h1>useReducer</h1>
        <h2>before useReducer</h2>
        <p>{count}</p>
        <button onClick={()=>{
            setCount(count+1)
            setShowText(!showText)
        }}>toggle</button>
        {showText && <p>I&apos;m without useReducer</p>}
        <h2>after useReducer</h2>
        <p>{state.count}</p>
        <button onClick={()=>{
            dispatch({type: 'increment'})
            dispatch({type: 'toggle'})
        }}>toggle</button>
        {state.showText && <p>I&apos;m with useReducer</p>}
        <h3>Explanation: useReducer is also a state management hook and we notice both codes do the same thing and no big difference might be noticed but when we deal with a component with large state variables, when using useState we will define functions to change each state simultaneously, however in useReducer it manages the state changing process via dispatching actions and managing these actions via reduce function.</h3>
    </div>
  )
}

export default UseReducer