import { ActionTypes } from "../constants/actionTypes";
export const setProducts = (products) => {
    return {
        type : ActionTypes.SET_PRODUCTS,
        payload:products,
    };
}; 
export const selectedProduct = (products) => {
    return {
        type : ActionTypes.SELECTED_PRODUCT,
        payload:products,
    };
}; 
export const removeSelectedProduct = () => {
    return {
      type: ActionTypes.REMOVE_SELECTED_PRODUCT,
    };
  };
  export const add_product_to_card = product => {
      return {
          type :ActionTypes.ADD_TO_CARD,
          payload : product
      };
  };