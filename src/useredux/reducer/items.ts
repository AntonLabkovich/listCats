import {
    actionCreateAddItems,
    actionCreateRemoveItem, actionCreateSearchItem,
    actionCreateSetItems,
    ADD_ITEM_REEST,
    FETCH_ITEMS,
    Iitems,
    REMOVE_ITEM,
} from "../actions/setItems";


export const removeItems = (data:Array<Iitems>):actionCreateRemoveItem => {
    return{
        type: REMOVE_ITEM,
        data: data
    }
};

export const setItems = (data:Array<Iitems>):actionCreateSetItems => {
    return{
        type: FETCH_ITEMS,
        data: data
    }
};

export const addItemReest = (data:Iitems):actionCreateAddItems =>{
    return{
        type: ADD_ITEM_REEST,
        data:data
    }
}




export function Items(state:Array<Iitems> = [], action:actionCreateSetItems|actionCreateRemoveItem|actionCreateAddItems|actionCreateSearchItem):Array<Iitems> {
    switch (action.type) {
        case ADD_ITEM_REEST:{
            return [...state, action.data]
        }
        case FETCH_ITEMS : {
            return [...action.data]
        }
        case REMOVE_ITEM : {
            return [...action.data]
        }
        default : {
            return state
        }
    }
}



// export const fetchingHasErrored = (hasErrored= false):actionCreateErrored=> {
//     return{
//         type: ITEMS_HAS_ERRORED,
//         hasErrored: hasErrored
//     };
// };
//
// export const itemIsLoading = (isLoading= false):actionCreateLoading => {
//     return {
//         type: ITEMS_IS_LOADING,
//         isLoading: isLoading
//     };
// };





// export function isLoadingItems(state = false, action:actionCreateLoading):boolean {
//     switch (action.type) {
//         case ITEMS_IS_LOADING : {
//             return action.isLoading
//         }
//
//         default:
//             return state
//     }
// }
//
//
// export function hasErroredItems(state = false, action:actionCreateErrored):boolean {
//     switch (action.type) {
//         case ITEMS_HAS_ERRORED : {
//             return action.hasErrored
//         }
//         default:
//             return state
//     }
// }
