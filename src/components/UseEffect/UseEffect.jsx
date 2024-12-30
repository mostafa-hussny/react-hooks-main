import { useEffect, useState } from "react"


const UseEffect = () => {
    const [count, setCount] = useState(0)
    useEffect(()=>{
        console.log('useEffect without dependency array triggered')
    })
    useEffect(()=>{
        console.log('useEffect with dependency array triggered')
    }, [])
    useEffect(()=>{
        console.log('useEffect with dependency array containing count triggered')
    },[count])
  return (
    <div>
        <h1>useEffect</h1>
        <h2>useEffect without dependency array</h2>
        <p>{`check the console how many times console logs 'useEffect without dependency array triggered'`}</p>
        <h2>useEffect with an empty dependency array</h2>
        <p>{`check the console how many times console logs 'useEffect with dependency array triggered'`}</p>
        <h2>useEffect with a dependency array containing count state</h2>
        <p>{`check the console how many times console logs 'useEffect with dependency array containing count triggered'`}</p>
        <p>{count}</p>
        <button onClick={()=>{
            setCount(count+1)
        }}>increment</button>
        <h3>Explanation: in the initial page loading all cases log once or twice (depending on whether you are running the application on development mode or not), however when we click the increment button the first and third cases log to the console, so let&apos;s clarify each case:</h3>
        <h3>Without dependency array: this tells react to execute this side effect whenever any state changes, so if you change a state inside a useEffect without a dependency array this results in infinite state updating and side effect running</h3>
        <h3>With an empty dependency array: this tells react to execute this side effect only on rendering and not anything else, this is helpful for example when you try to fetch data on initial load</h3>
        <h3>With a non-empty dependency array: this tells react to execute this side effect on the initial load and whenever anything inside the dependency array changes.</h3>
    </div>
  )
}

export default UseEffect