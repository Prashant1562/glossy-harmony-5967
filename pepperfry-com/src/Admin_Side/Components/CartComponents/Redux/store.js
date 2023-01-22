import { legacy_createStore } from "redux";
import { reducer } from "./reducer";

let initalState={
    product:[],
    isLoading:false,
    isError:false
}
export const store=legacy_createStore(reducer,initalState)