import { useState } from "react";
import usePrevious from "../hooks/usePrevious";

export default function Counter() {
    const [count, setCount] = useState(0)

    const previous = usePrevious(count)

    return (
        <>
            <h2>Counter</h2>
            <h3>Count:{count}</h3>

            <h3>Previous: {previous}</h3>

            <button onClick={() => setCount(c => c + 1)}>Increment</button>
            <button onClick={() => setCount(c => c - 1)}>Decrement</button>
        </>
    )
}