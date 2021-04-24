import * as actionTypes from "./actionTypes"
import axios from "../../axios-orders"

export const purchitingOrderSucess=(id,orderData)=>{
    return {
        type:actionTypes.PURCHTING_ORDER_SUCCESS,
        orderId:id,
        orderData:orderData
    }
}

export const purchitingOrderFaild=(error)=>{
    return {
        type:actionTypes.PURCHTING_ORDER_FAILD,
        error:error
    }
}

export const purchitingBurgerLoading=()=>{
    return {
        type:actionTypes.PURCHTING_ORDER_START,
       
    }
}



export const purcheseBurgerStart=(orderData,PushFunc)=>{
    return dispatch=>{
        dispatch(purchitingBurgerLoading())
       
        axios.post( '/orders.json', orderData )
        .then( response => {
          dispatch(purchitingOrderSucess(response.data.name,orderData))
          PushFunc("/")
        } )
        .catch( error => {
            dispatch(purchitingOrderFaild(error))
        } );
    }
}