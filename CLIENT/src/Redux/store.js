import { applyMiddleware, legacy_createStore as createStore , compose, combineReducers} from "redux";
import thunk from 'redux-thunk';
import { reducer } from './reducer';
import { cartReducer } from './Cart/reducer';

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
       
    }) : compose;

// const loggerMiddleware = (store) => (next) => (action) => {
//     if(typeof action === "function")
//         return action(store.dispatch)
//     next(action)
// }

// export const store = createStore(reducer, applyMiddleware(loggerMiddleware))


const middleware = [thunk];

const enhancer = composeEnhancers(
  applyMiddleware(...middleware),
  
   
);

const rootReducer = combineReducers({
   cart: cartReducer,
   shippingData : reducer
 
});

export const store = createStore(rootReducer, enhancer);