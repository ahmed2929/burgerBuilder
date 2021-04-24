import * as actionType from "../actions/actionTypes"

const initialState = {
   orders:[],
   loading:false
}

export default (state = initialState, { type, orders,id }) => {
    switch (type) {

        case actionType.PURCHTING_ORDER_START:
        
        return {
            ...state,
            loading:true


        
        
        }
    


    case actionType.PURCHTING_ORDER_SUCCESS:
        const newOrder = {
            ...orders,
            id
        }
        return {
            ...state,
            orders:state.orders.concat(newOrder),
            loading:false


        
        
        }

    case actionType.PURCHTING_ORDER_FAILD:
        return {
            ...state,
         loading:false

        
        
        }



    default:
        return state
    }
}
