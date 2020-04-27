import {
    actionCreateSearchItem, IdeletedItems,
    Iitems,
    SEARCH_ITEM
} from "../actions/setItems";


export const searchItems = (data:Array<Iitems>):actionCreateSearchItem =>{
    return{
        type: SEARCH_ITEM,
        data:data
    }
}



export function FilterItems(state:Array<Iitems>|Array<IdeletedItems>=[], action:actionCreateSearchItem):Array<Iitems>|IdeletedItems {
    switch (action.type) {
        case SEARCH_ITEM : {
            console.log(action.data)
            return action.data
        }
        default : {
            return state
        }
    }
}
