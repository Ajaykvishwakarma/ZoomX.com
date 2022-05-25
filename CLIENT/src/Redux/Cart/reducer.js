
import { ADD_CART ,FETCH_CART_DATA, DELETE_CART, UPDATE_CART} from './actiontype';

const initialState = {
   
    fetchcartObj : {},
    cart : []
    
}

export const cartReducer = ( state = initialState, { type, payload}) => {
    

    switch(type) {

        case ADD_CART:
            return { ...state, fetchcartObj: payload}
        case FETCH_CART_DATA:
            return { ...state, cart: payload}   

        case DELETE_CART:
            state.cart.splice(payload, 1)
            localStorage.setItem('cartData', JSON.stringify(state.cart))
            const cartData = JSON.parse(localStorage.getItem('cartData')) || [];
            return { ...state, cart: cartData };

        case UPDATE_CART:
            
            for(let product of state.cart) {
                if(product._id == payload[0]) {
                    if(payload[1] >= 0){

                        product.count = payload[1]
                    }
                }
            }
            
            localStorage.setItem('cartData', JSON.stringify(state.cart))
            const cartData1 = JSON.parse(localStorage.getItem('cartData')) || [];
            return { ...state, cart: cartData1}

        default:
           
            return state
    }
}