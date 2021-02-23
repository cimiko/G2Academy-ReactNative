import { ADD_PRODUCT, DELETE_PRODUCT, PLUS_PRODUCT, MIN_PRODUCT, ADD_HISTORY } from '../constants'

export const initialState = [];

function cartReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_PRODUCT:
            const data = [...state]
            const fill = data.filter((x) => x.id === action.payload.id)
            if(fill.length){
                return data
            }
            return [...state, action.payload]
        case PLUS_PRODUCT:
            const plusOrder = [...state]
            plusOrder[action.payload].qty += 1
            plusOrder[action.payload].totalPrice = plusOrder[action.payload].qty * plusOrder[action.payload].price
            return plusOrder
        case MIN_PRODUCT:
            if (state[action.payload].qty === 1) {
                return state
            } else {
                const minOrder = [...state]
                minOrder[action.payload].qty -= 1
                minOrder[action.payload].totalPrice = minOrder[action.payload].qty * minOrder[action.payload].price
                return minOrder
            }
        case DELETE_PRODUCT:
            return state.filter((x) => x.id !== action.payload);
        case ADD_HISTORY:
            return initialState
        default:
            return state;
    }
}

export { cartReducer };