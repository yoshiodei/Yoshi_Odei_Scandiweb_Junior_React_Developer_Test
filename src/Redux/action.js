import { 
    UPDATE_CART_LIST,
    CHANGE_CURRENCY, 
    ADD_TO_CART,
    CHANGE_CATEGORY,
} from './action.type';

export const addToCart = (cartItemObject) => {
   return{ 
    type: ADD_TO_CART,
    payload: cartItemObject
    }
}

export const changeCurrency = (currencyLabel) => {
    return {
        type: CHANGE_CURRENCY,
        payload: currencyLabel
    }
}

export const updateCartList = (updatedCartList) => {
    return {
        type: UPDATE_CART_LIST,
        payload: updatedCartList
    }
}

export const changeCategory = (categoryName) => {
  return {
    type: CHANGE_CATEGORY,
    payload: categoryName
  }
}