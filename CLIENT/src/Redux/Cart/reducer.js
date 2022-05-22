
import { ADD_CART } from './actiontype';

const initialState = {
   
    fetchcartObj : {},
    
}

export const reducer = ( state = initialState, { type, payload}) => {
    switch(type) {

        case ADD_CART:
            return { ...state, fetchcartObj: payload}
        
        default:
            return state
    }
}