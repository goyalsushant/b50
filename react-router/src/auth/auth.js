export const initialState = {
    user: null
}

export function authReducer(state, action) {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                user: 'John'
            }

        case 'LOGOUT':
            return {
                ...state,
                user: null
            }

        default:
            return
    }
}

