import { useState } from "react"

function TodoApp() {

    const [task, setTask] = useState('')
    const [todos, setTodos] = useState(['First Task'])

    const addTask = () => {
        // update todos list

        // 1. create a new array and update state with the new array
        // const newList = [...todos, task]
        // setTodos(newList)

        // 2. use previous state reference and add then value directly to it and update the state
        setTodos(prev => [...prev, task]) // here prev is essentially holding the value currently stored inside todos state

        // 3. update the todos directly - this will not work
        // todos.push(task)
        // setTodos(todos)

        // empty the task input field
        setTask('')
    }

    return (
        <>
            <input type="text" onChange={(e) => setTask(e.target.value)} value={task} />
            <button onClick={addTask}>Add Task</button>
            <ul>
                {
                    todos.map((todo, i) => (
                        // <li key={i}>{todo}</li>
                        <div>{todo}</div>
                    ))
                }
            </ul>
        </>
    )
}

export default TodoApp