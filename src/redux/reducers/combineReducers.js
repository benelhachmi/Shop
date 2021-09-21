import { combineReducers } from "redux";
 
import {productReducers ,selectReducers,addToCard} from "./productReducers"
const reducers = combineReducers({
    allProduct :productReducers,
    product :selectReducers,
    card:addToCard,
  
});
export default reducers;