export const FETCH_ITEMS = 'FETCH_ITEMS';
// export const ITEMS_HAS_ERRORED = 'ITEMS_HAS_ERRORED';
// export const ITEMS_IS_LOADING = 'ITEMS_IS_LOADING';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const ADD_ITEM_REEST = 'ADD_ITEM_REEST';
export const SEARCH_ITEM = 'SEARCH_ITEM'


export interface Iitems {
    id:number,
    name:string,
    shortInfo:string,
    more:string
}

export interface IdeletedItems extends Iitems {
    dateDeleted: Date
}

export type actionCreateRemoveItem = {
    type: typeof REMOVE_ITEM,
    data: Array<Iitems>
}

export type actionCreateAddItems = {
    type: typeof ADD_ITEM_REEST,
    data: Iitems
}

export type actionCreateSetItems = {
    type: typeof FETCH_ITEMS,
    data: Array<Iitems>
}


export type actionCreateSearchItem = {
    type: typeof SEARCH_ITEM,
    data: Array<Iitems>
}

// export type actionCreateErrored = {
//     type: typeof ITEMS_HAS_ERRORED,
//     hasErrored: boolean,
// }
//
// export type actionCreateLoading = {
//     type: typeof ITEMS_IS_LOADING,
//     isLoading: boolean
// }
