import { useState } from "react"

export const State = () => {
    const [count, setCount] = useState(1)
    console.log(' parent components');

    const handelCount = () => {
        setCount(() => count + 1)
        console.log(count);
    }

    return (
        <>
            <h1>{count}</h1>
            <button onClick={handelCount}>increment</button>
            <ChildComponent />
        </>
    )
}

const ChildComponent = () => {
    console.log(' child components');

    return (
        <>
            <h1>This is a child components</h1>
        </>
    )
}