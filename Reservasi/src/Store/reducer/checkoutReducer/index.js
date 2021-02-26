import { ADD_CHECKOUT } from '~/Store/constant'

function checkoutReducer(state, action){
    switch(action.type) {
        case ADD_CHECKOUT:
            return [...state, action.payload]
        default:
            return state
    }
}

export default checkoutReducer