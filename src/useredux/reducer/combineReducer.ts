import {combineReducers} from "redux";
import {Items} from "./items";
import {OneCat} from "./discriptionCat";
import {RemovedItems} from "./deletedItems";
import {FilterItems} from "./filter";




export const rootReducer =  combineReducers({
    Items,
    RemovedItems,
    OneCat,
    FilterItems
});

export type rootReducerType = typeof rootReducer;

export type globalStateType = ReturnType<rootReducerType>;
