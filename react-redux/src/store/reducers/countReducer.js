function counterReducer(state = { value: 0 }, action) {

    if(action.type === 'increment') {
        return {
            value: state.value + 1
        }
    }

    if(action.type === 'decrement') {
        return {
            value: state.value - 1
        }
    }

    return state
}