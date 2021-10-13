import { createStore, combineReducers,applyMiddleware  } from "redux";



import thunk from "redux-thunk";
import { cartReducer } from "./Cart/cartReducer";
// import { ordersReducer } from "./order/ordersReducer";


const reducers = combineReducers({
  cart: cartReducer,
  // ord: ordersReducer
});
// 
const cartFromLocalStorage = JSON.parse(localStorage.getItem("cart")) || [];

const initialState = {
 
  cart:{
    cart:cartFromLocalStorage,
  }
 
};

const middlewares = [thunk];
const Store = createStore(
  reducers,
  initialState,
  applyMiddleware(...middlewares));

export default Store;
