import { useState } from "react"

export const State = () => {
    const [count, setCount] = useState(1)

    const handelCount = () => {
        setCount(() => count + 1)
        console.log(count);
    }

    return (
        <>
            <h1>{count}</h1>
            <button onClick={handelCount}>increment</button>
        </>
    )
}