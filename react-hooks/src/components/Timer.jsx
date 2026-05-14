import { useEffect, useRef, useState } from "react";

function Timer() {
    const [seconds, setSeconds] = useState(0)

    const intervalRef = useRef()
    // console.log(intervalRef)

    useEffect(() => {
        //  create an interval
        intervalRef.current = setInterval(() => {
            setSeconds(prev => prev + 1)
        }, 1000)

        return () => clearInterval(intervalRef.current)
    })

    return (
        <div>
            <h2>Timer</h2>

            <h3>{seconds}</h3>
        </div>
    )
}

export default Timer