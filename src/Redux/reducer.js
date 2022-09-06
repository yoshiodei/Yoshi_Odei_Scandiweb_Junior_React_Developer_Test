import { 
    UPDATE_CART_LIST,
    CHANGE_CURRENCY, 
    ADD_TO_CART, 
    CHANGE_CATEGORY 
} from './action.type';

const initialState = {
    cartItems: [],
    category: 'all',
    currency: {label: 'USD', symbol: '$', index: 0}
}

const reducer = (state = initialState , action) => {
    switch(action.type){
        case ADD_TO_CART:   const itemArray = [...state.cartItems, action.payload];
                            window.sessionStorage.setItem('cartItem', JSON.stringify(itemArray));
                            return {...state, cartItems: itemArray};

        case CHANGE_CURRENCY:   const currency = action.payload;
                                window.sessionStorage.setItem('currency', JSON.stringify(currency));
                                return {...state, currency};

                                
        case UPDATE_CART_LIST:  const updatedItemArray = action.payload;
                                window.sessionStorage.setItem('cartItem', JSON.stringify(updatedItemArray));
                                return {...state, cartItems: action.payload};
                                
        case CHANGE_CATEGORY:   return {...state, category: action.payload}                      
                    
        default: return state; 
    }
}

export default reducer;