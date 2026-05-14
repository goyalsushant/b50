import { useCallback, useEffect, useRef, useState } from "react"
import ExpensiveComponent from "./ExpensiveComponent"

export default function CallbackMemoization() {
    const [count, setCount] = useState(0)

    const cbRef = useRef()

    const stableCb = useCallback(() => {
        console.log('Created only once')
    }, [])

    useEffect(() => {
        if(cbRef.current) {
            console.log(cbRef.current === stableCb)
        }
        cbRef.current = stableCb
    }, [count, stableCb])

    return (
        <div>
            <h2>useCallback Example</h2>
            <h3>{count}</h3>
            <button onClick={() => setCount(c => c +1)}>Increment</button>

            <ExpensiveComponent action={stableCb} />
        </div>
    )
}