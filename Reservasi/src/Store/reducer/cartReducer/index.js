import { ADD_CART, DELETE_CART } from '~/Store/constant'

function cartReducer(state, action){
    switch(action.type) {
        case ADD_CART:
            return [...state, action.payload]
        case DELETE_CART:
            const data = [...state]
            const fill = data.filter(x => x.id !== action.payload)
            return fill
        default:
            return state
    }
}

export default cartReducer