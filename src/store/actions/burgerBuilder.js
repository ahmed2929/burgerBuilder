import * as actionTypes from "./actionTypes"
import axios from "../../axios-orders"
export const addIngrdient=(ingName)=>{
    return {
        type:actionTypes.ADD_INGRDIENT,
        ingredient:ingName
    }
}


export const removeIngrdient=(ingName)=>{
    return {
        type:actionTypes.REMOVE_INGRDIENT,
        ingredient:ingName
    }
}

export const setIngrdient=(ingredients)=>{
    return {
        type :actionTypes.SET_INGRDIENT,
        upingredients:ingredients,
        
    }
}


const fetchIngradientFaild=()=>{
    return {
        type:actionTypes.FETCH_INGRDIENT_FAILD
    }
}


export const initIngrdientSync=()=>{
    return dispatch=>{

       
         axios.get( '/ingredients.json' )
             .then( response => {
                 console.log(response.data)
                 dispatch(setIngrdient(response.data))
             } )
             .catch( error => {
               dispatch(fetchIngradientFaild())
             } );
     
    }
}