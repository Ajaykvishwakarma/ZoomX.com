
import { ADD_CART} from './actiontype';



export const setCartData = (payload) =>({type: ADD_CART, payload})




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
        // enter you logic when the fetch is successful
            // console.log(data)
        })
        .catch(error => {
        // enter your logic for when there is an error (ex. error toast)
        console.log(error)
        })  



    
    
}

// export const fetchCartData = (url) => async (dispatch) => {

//     const token = JSON.parse(localStorage.getItem('token'))
//     dispatch(setLoading(false))
//     const a = await fetch(url, {
//         method: "GET",
//         headers : {
//             Authorization : `Bearer ${token}`
//         }
//     })
     
//     const res = await a.json()
//     const data = res
//     dispatch(setLoading(true))
//     dispatch(setCartData(data))
    
// }

// export const deleteCartdata = (url) => async (dispatch) => {

//     const token = JSON.parse(localStorage.getItem('token'))
//     const a = await fetch(url, {
//         method: "DELETE",
//         headers : {
//             Authorization : `Bearer ${token}`
//         }
//     })
//     const res = await a.json()
//     const data = res
//     dispatch(setLoading(true))
//     dispatch(setDeletecart(data))
// }