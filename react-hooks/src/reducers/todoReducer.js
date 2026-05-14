export const initialState = {
    todos: []
}

export function todoReducer(state, action) {
    switch (action.type) {
        case "ADD":
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }

        case "REMOVE":
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id != action.payload)
            }

        default:
            return state
    }
}