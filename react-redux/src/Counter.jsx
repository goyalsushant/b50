import { useDispatch, useSelector } from "react-redux"
import { decrement, decrementByCount, increment, incrementByCount } from "./store/slices/counterSlice"

function Counter() {

    const count = useSelector(state => state.counter.value)
    const dispatch = useDispatch()

    return (
        <>
            <div>
                <h1>Count: {count}</h1>

                <button onClick={() => dispatch(increment())}>Increment</button>
                <button onClick={() => dispatch(decrement())} > Decrement</button>

                <button onClick={() => dispatch(incrementByCount(5))} > Increment By 5</button >
                <button onClick={() => dispatch(decrementByCount(5))}> Decrement By 5</button >
            </div >
        </>
    )
}

export default Counter