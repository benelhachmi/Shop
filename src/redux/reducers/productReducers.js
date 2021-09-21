import { ActionTypes } from "../constants/actionTypes";

const initialState = {
    products :[],
    card:[],
   
}

export const productReducers = (state = initialState , {type,payload}) => {
    switch(type){
        case(ActionTypes.SET_PRODUCTS):
            return {
            ...state,
            products :payload
            }
        default:
            return state

        }
    };

    export const selectReducers = (state = initialState, {type,payload}) => {
        switch(type){
            case ActionTypes.SELECTED_PRODUCT:
                return {...state ,...payload};
            case ActionTypes.REMOVE_SELECTED_PRODUCT:
                    return {};
            default:
                return state;
    }};

    export const addToCard = (state =initialState, action) => {
        let updateCard;
        let UpdateItemIndex;

        switch(action.type){
            case ActionTypes.ADD_TO_CARD:
                console.log("STATE PAYLOAD :", action.payload , " type : ", action.type)
                updateCard =[...state.card];
                UpdateItemIndex =updateCard.findIndex(e => e.id === action.payload.id);
                if(UpdateItemIndex <0){
                    updateCard.push({...action.payload,quantity:1});
                }else{
                    const updateItem ={
                        ...updateCard[UpdateItemIndex]
                    };
                    updateItem.quantity++;
                    updateCard[UpdateItemIndex] = updateItem;
                }
                return {...state, card:updateCard};
            default:
                return state;
        
        }

    }
