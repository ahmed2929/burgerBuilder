import * as actionType from "../actions/actionTypes"

const initialState = {
    ingredients: null,
    totalPrice: 4,
    error:false
}

const INGREDIENT_PRICES = {
    salad:1,
    cheese: 1,
    meat: 1,
    bacon: 1
};


export default (state = initialState, { type, payload,ingredient,upingredients }) => {
    switch (type) {

    case actionType.ADD_INGRDIENT:
        return {
            ...state,
            ingredients:{
                ...state.ingredients,
                [ingredient]:state.ingredients[ingredient]+1
            },
            totalPrice:state.totalPrice+ INGREDIENT_PRICES[ingredient]

        
        
        }

    case actionType.REMOVE_INGRDIENT:
        return {
            ...state,
            ingredients:{
                ...state.ingredients,
                [ingredient]:state.ingredients[ingredient]-1
            },
            totalPrice:state.totalPrice- INGREDIENT_PRICES[ingredient]

        
        
        }


        case actionType.SET_INGRDIENT:
            console.log("uping is ",upingredients)
            return {
                ...state,
                ingredients:upingredients,
                error:false,
                totalPrice:4
             
    
            
            
            }
        
            case actionType.FETCH_INGRDIENT_FAILD:
                console.log("error rus")

                return {
                     ...state,
                         error:true
                    
                 
        
                
                
                }

    default:
        return state
    }
}
