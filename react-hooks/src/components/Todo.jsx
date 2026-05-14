import { useReducer, useState } from "react";
import { initialState, todoReducer } from "../reducers/todoReducer";

export default function ToDo() {
    const [text, setText] = useState('')

    const [state, dispatch] = useReducer(todoReducer, initialState)

    const addTodo = () => {
        if (!text.trim()) return

        dispatch({
            type: 'ADD',
            payload: {
                id: Date.now(),
                text
            }
        })
    }

    const removeTodo = (id) => {
        dispatch({
            type: 'REMOVE',
            payload: id
        })
    }

    console.log(state)

    return (
        <>
            <h2>ToDo App</h2>

            <input type="text" onChange={(e) => setText(e.target.value)} />
            <button onClick={addTodo}>Add To-Do</button>

            {
                // display the data here
                state.todos.map(todo => (
                    <div>
                        <span>{todo.text}</span>
                        <button onClick={() => removeTodo(todo.id)}>Delete</button>
                    </div>
                ))
            }
        </>
    )
}