import { combineReducers } from "redux";
 
import {productReducers ,selectReducers} from "./productReducers"
const reducers = combineReducers({
    allProduct :productReducers,
    product :selectReducers,

});
export default reducers;