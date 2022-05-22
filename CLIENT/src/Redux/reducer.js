import { AUTH, LOADING, FETCH_DATA, FETCH_PERTICULAR_DATA } from './actionTypes';

const initialState = {
    loading : true,
    auth : false,
    fetchdataObj : {},
    perticulardata : []
}

export const reducer = ( state = initialState, { type, payload}) => {
    switch(type) {
        case AUTH:
            return{ ...state, auth : payload}
        case LOADING:
            return { ...state, loading : payload}
        case FETCH_DATA:
            return { ...state, fetchdataObj: payload}
        case FETCH_PERTICULAR_DATA:
            return { ...state, perticulardata: payload}
        default:
            return state
    }
}