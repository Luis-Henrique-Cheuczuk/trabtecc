import { homeActionTypes } from "./actions.types";

export const INITIAL_STATE = {
    data: {nameOfProduct:"", amountOfProduct:"", amountOfPhenylalanine:"", consumptionTime:""} ,
    loading: false,
}

export default function home(state=INITIAL_STATE, action){
    console.log("entrou no reducer:")
    switch(action) {
        case homeActionTypes.SEND_CONSUMITION_DATA: {
            const {nameOfProduct, amountOfProduct, amountOfPhenylalanine, consumptionTime}=action.payload;
            console.log("nomedoproduto: "+nameOfProduct);
            return {...state, loading:true}
        }
        case homeActionTypes.SEND_CONSUMITION_DATA_SUCESS:{
            return {...state, loading:false}
        }
        case homeActionTypes.SEND_CONSUMITION_DATA_FAILURE:{
            
        }
        default:
            return state;
    }
}