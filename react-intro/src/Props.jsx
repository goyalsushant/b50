function PropsExample() {

    let count = 0

    function increaseCount(trigger) {
        count++
        console.log(trigger, count)
    }

    function handleMessage(message) {
        console.log(message)
    }

    return (
        <>
            <FirstChildComponent sendMessage={handleMessage} increaseCount={increaseCount} count={count}/>
            <SecondChildComponent sendMessage={handleMessage} increaseCount={increaseCount} count={count}/>
            Count: {count}
        </>
    )
}

function FirstChildComponent(props) {
    return (
        <>
            {/* <p>{props.value}</p> */}
            <h2>First Child</h2>

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
            {/* <p>Count: {props.count}</p> */}
            <button onClick={() => props.increaseCount('Second')}>Send Message</button>
        </>
    )
}

export default PropsExample