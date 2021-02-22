import { ADD_HISTORY, PLUS_HISTORY } from '../constants'

const initialState = []

function historyReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_HISTORY:
            return [...state, action.payload]
        case PLUS_HISTORY:
            const plusOrder = [...state]
            plusOrder[action.payload].qty += 1
            return plusOrder
        default:
            return state;
    }
}

export default historyReducer
