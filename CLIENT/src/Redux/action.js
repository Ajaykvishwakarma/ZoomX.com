import { AUTH, LOADING, FETCH_DATA, FETCH_PERTICULAR_DATA, DELETE_CART} from './actionTypes';
const axios = require("axios");

export const setAuth = (payload) => ({type: AUTH, payload })
export const setLoading = (payload) => ({ type: LOADING, payload})
export const setData = (payload) =>({type: FETCH_DATA, payload})
export const setPerticularData = (payload) =>({type: FETCH_PERTICULAR_DATA, payload})
export const setDeletecart = (payload) => ({type: DELETE_CART, payload})

export const fetchData = (url) => async (dispatch) => {

    const token = JSON.parse(localStorage.getItem('token'))
    dispatch(setLoading(false))
    const a = await fetch(url, {
        method: "GET",
        headers : {
            Authorization : `Bearer ${token}`
        }
    })
     
    const res = await a.json()
    const data = res
    dispatch(setLoading(true))
    dispatch(setData(data))
    
}

export const fetchPerticularData = (url) => async(dispatch) =>{


  const token = JSON.parse(localStorage.getItem('token'))
    // console.log({url})
    dispatch(setLoading(false))
    const a = await fetch(url, {
        method : "GET",
        headers : {
            Authorization : `Bearer ${token}`
        }
    })
    const res = await a.json()
    const data = res
    // console.log(data)
    dispatch(setLoading(true))
    dispatch(setPerticularData([data]))
}

export const deleteCartdata = (url) => async (dispatch) => {
   

    const token = JSON.parse(localStorage.getItem('token'))
    // const a = await fetch(url, {
    //     method: "DELETE",
    //     headers : {
    //         Authorization : `Bearer ${token}`
    //     }
    // })
    axios.delete(url, {
        headers: {
          Authorization: `Bearer ${token}`
        }
    
      });

}