import { useState } from "react"

// useState is a React hook provided by the React library itself.

function Counter() {

    const [count, setCount] = useState(0)
    // Initially count is assigned a value of 0
    // We are saying React save this value for now
    // we are going to use setCount in order to update the value

    const handleIncrease = () => {
        console.log(count)
        setCount(count + 1)
    }

    const handleDecrease = () => {
        console.log(count)
        setCount(count - 1)
    }

    return (
        <>
            Count: {count}
            <button onClick={handleIncrease}>Increment</button>
            <button onClick={handleDecrease}>Decrement</button>
        </>
    )

}

export default Counter