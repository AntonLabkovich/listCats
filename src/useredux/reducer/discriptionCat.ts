
import {actionCreateSetOneCat, FETCH_ITEM_ONE_CAT, ICat} from "../actions/discriptionItem";



export const oneCat = (cat:ICat):actionCreateSetOneCat => {
    return{
        type: FETCH_ITEM_ONE_CAT,
        cat: cat
    }
};


export function OneCat(state:ICat = {}, action:actionCreateSetOneCat):ICat|{} {
    switch (action.type) {
        case FETCH_ITEM_ONE_CAT : {
            return action.cat
        }
        default : {
            return state
        }
    }
}
