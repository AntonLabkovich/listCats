import {IdeletedItems, Iitems} from "../actions/setItems";
import {
    actionCreateRemoveRemovedItem,
    actionCreateSetRemovedItems,
    ADD_REMOVED_ITEMS,
    REMOVE_REMOVED_ITEMS
} from "../actions/actionRemovedItems";

export const removedRemoveItems = (removedCat:IdeletedItems):actionCreateRemoveRemovedItem => {
    return{
        type: REMOVE_REMOVED_ITEMS,
        removedCat: removedCat
    }
};

export const setRemovedItem = (removedCats:IdeletedItems):actionCreateSetRemovedItems => {
    return{
        type: ADD_REMOVED_ITEMS,
        removedCats: removedCats
    }
};


export function RemovedItems(state:Array<IdeletedItems> = [], action:actionCreateRemoveRemovedItem|actionCreateSetRemovedItems):Array<IdeletedItems>|[] {
    switch (action.type) {
        case ADD_REMOVED_ITEMS : {
            console.log('red',state)
            return [...state, action.removedCats]
        }
        case REMOVE_REMOVED_ITEMS:{
            return state.filter((item:IdeletedItems)=>item.id!==action.removedCat.id);
        }
        default:{
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





