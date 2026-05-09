import { useState } from "react"

function PropsExample() {

    // let count = 0
    let [count, setCount] = useState(0)

    function increaseCount(trigger) {
        // console.log(trigger,'current value of count is: ', count)
        // count = 2 //This operation is invalid as state can not be directly modified
        // count++  
        setCount(count + 1)
        // console.log(trigger,'updated value of count is: ', count)
    }

    function handleMessage(message) {
        console.log(message)
    }

    return (
        <>
            <FirstChildComponent sendMessage={handleMessage} increaseCount={increaseCount} />
            <SecondChildComponent sendMessage={handleMessage} increaseCount={increaseCount} />
            Parent Count: {count}
        </>
    )
}

function FirstChildComponent(props) {
    return (
        <>
            {/* <p>{props.value}</p> */}
            <h2>First Child</h2>
            First Child Count: {props.count}

            {/* <p>Count: {props.count}</p> */}
            <button onClick={() => props.increaseCount('First')}>Send Message</button>
        </>
    )
}

function SecondChildComponent(props) {
    return (
        <>
            {/* <p>{props.value}</p> */}
            <h2>Second Child</h2>
            Second Child Count: {props.count}

            {/* <p>Count: {props.count}</p> */}
            <button onClick={() => props.increaseCount('Second')}>Send Message</button>
        </>
    )
}

export default PropsExample