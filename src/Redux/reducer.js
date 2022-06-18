import { UPDATE_CART_LIST ,CHANGE_CURRENCY, ADD_TO_CART } from './action.type';

const initialState = {
    cartItems: [],
    currency: {label: 'USD', symbol: '$', index: 0}
}

const reducer = (state = initialState , action) => {
    switch(action.type){
        case ADD_TO_CART: return {...state, cartItems: [...state.cartItems, action.payload]};
        case CHANGE_CURRENCY: return {...state, currency: action.payload};
        case UPDATE_CART_LIST: return {...state, cartItems: action.payload};
        default: return state; 
    }
}

export default reducer;