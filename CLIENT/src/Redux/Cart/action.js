
import { ADD_CART, FETCH_CART_DATA, DELETE_CART, UPDATE_CART} from './actiontype';

// const cartData = JSON.parse(localStorage.getItem('cartData')) || [];

export const setCartData = (payload) =>({type: ADD_CART, payload})
export const setData = (payload) =>({type: FETCH_CART_DATA, payload})
export const setDeleteCart = (payload) => ({type : DELETE_CART, payload})
export const setUpdateCart = (payload) => ({type : UPDATE_CART, payload})

export const addCartData = (cartdata) => async (dispatch) => {

    // console.log(cartdata)
    const token = JSON.parse(localStorage.getItem('token'))



   await fetch('https://zoomxx.herokuapp.com/cart', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
             
        },
        body: JSON.stringify(cartdata)
        })
        .then(res => res.json())
        .then(data => {

        })
        .catch(error => {
        
        console.log(error)
        })  



    
    
}

export const fetchCartData = (cartData) => async (dispatch) => {

   
    dispatch(setData(cartData))

}

