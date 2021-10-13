import axios from "axios";

import {
  PLACE_ORDER_START,
  PLACE_ORDER_SUCCESS,
  PLACE_ORDER_FAILED,
  GET_ORDERS_START,
  GET_ORDERS_SUCCESS,
  GET_ORDERS_FAILED,
  GET_ORDER_START,
  GET_ORDER_SUCCESS,
  GET_ORDER_FAILED,
  PAY_ORDER_START,
  PAY_ORDER_SUCCESS,
  PAY_ORDER_FAILED,
} from "./orderTypeConstent";

const URL_API='';
export const PlaceOrder = (history) => {
  return async (dispatch, getState) => {
    dispatch({
      type: PLACE_ORDER_START,
    });
    try {
      const state = getState();
      const requestDate = {
        orderItems: state.cart.cart,
        shippingAddress: state.cart.shippingAddress,
        paymentMethod: "PayPal",
        totalPrice: state.cart.cart
          .reduce((acc, item) => acc + item.price * item.qty, 0)
          .toFixed(2),
      };

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${state.userDetailes.user.token}`,
        },
      };

      const res = await axios.post(`${URL_API}/orders`, requestDate, config);

      dispatch({
        type: PLACE_ORDER_SUCCESS,
        payload: res.data,
      });
      localStorage.removeItem("cart");
      
      history.push("/order/" + res.data._id);
    } catch (e) {
      dispatch({
        type: PLACE_ORDER_FAILED,
        payload: e?.response?.data?.message,
      });
    }
  };
};

export const GetOrders = () => {
  return async (dispatch, getState) => {
    dispatch({
      type: GET_ORDERS_START,
    });
    try {
      const state = getState();
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${state.userDetailes.user.token}`,
        },
      };
      const res = await axios.get(`${URL_API}/orders/myorders`, config);
      dispatch({
        type: GET_ORDERS_SUCCESS,
        payload: res.data,
      });
    } catch (e) {
      dispatch({
        type: GET_ORDERS_FAILED,
        payload: e?.response?.data?.message,
      });
    }
  };
};
export const GetOrderById = (id) => {
  return async (dispatch, getState) => {
    dispatch({
      type: GET_ORDER_START,
    });
    const state = getState();
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${state.userDetailes.user.token}`,
      },
    };
    try {
      const res = await axios.get(`${URL_API}/orders/${id}`, config);
      console.log("response", res);
      dispatch({
        type: GET_ORDER_SUCCESS,
        payload: res.data,
      });
    } catch (e) {
      dispatch({
        type: GET_ORDER_FAILED,
        payload: e?.response?.data?.message,
      });
    }
  };
};


export const payOrder = (id, details) => {
  return async (dispatch, getState) => {
    dispatch({
      type: PAY_ORDER_START,
    });
    try {
      //get token.
      const state = getState();
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${state.userDetailes.user.token}`,
        },
      };

      const res = await axios.put(
        `${URL_API}/orders/${id}/pay`,
        details,
        config
      );
      dispatch({
        type: PAY_ORDER_SUCCESS,
        payload: res.data,
      });
    } catch (e) {
      dispatch({
        type: PAY_ORDER_FAILED,
        payload: e?.response?.data?.message,
      });
    }
  };   
};


export const orderRequest=(value)=>{
  return async (dispatch,getState)=>{
    const list= getState().cart.cart
    const total= getState().cart.cart
      .reduce((acc, item) => {
        return acc + item.price * item.qty;
      }, 0)
      .toFixed(2)
    const Order={
      userData:{
        ...value
      },
      listOfProduct:[
        ...list
      ]
      ,total
    }
    
   const res= await axios.post('https://maba-shop.herokuapp.com/api/products/aljwharaOrderRequest', Order)
   console.log("result: ",res)
   if(res){
     
    localStorage.removeItem("cart");
   }
  }
}
