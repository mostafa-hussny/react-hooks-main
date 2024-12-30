import { forwardRef, useImperativeHandle, useState, useRef } from "react"

const ChildComponent = forwardRef((props, ref) => {
    const [count, setCount] = useState(0);

    useImperativeHandle(ref, () => ({
        increment: () => setCount(count + 1),
    }));

    return(
        <div>
            <h4>Child Component</h4>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>increment from child</button>
        </div>
    )
})

ChildComponent.displayName = 'ChildComponent';

const UseImperativeHandle = () => {
    const childRef = useRef(null);
  return (
    <div>
        <h1>useImperativeHandle</h1>
        <ChildComponent ref={childRef}/>
        <button style={{marginTop:"10px"}} onClick={()=>{
            childRef.current.increment()
        }}>increment from parent</button>
        <h3>Explanation: useImperativeHandle hook helps passing child components&apos; methods to parent components instead of declaring them at the parents components and passing them as props to children.</h3>
    </div>
  )
}

export default UseImperativeHandle