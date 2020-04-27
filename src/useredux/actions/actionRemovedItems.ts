import {IdeletedItems} from "./setItems";

export const ADD_REMOVED_ITEMS = 'ADD_REMOVED_ITEMS';
export const REMOVE_REMOVED_ITEMS = 'REMOVE_REMOVED_ITEMS';



export type actionCreateRemoveRemovedItem = {
    type: typeof REMOVE_REMOVED_ITEMS,
    removedCat: IdeletedItems
}

export type actionCreateSetRemovedItems = {
    type: typeof ADD_REMOVED_ITEMS,
    removedCats: IdeletedItems
}

