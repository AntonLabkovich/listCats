
export const FETCH_ITEM_ONE_CAT = 'FETCH_ITEM_ONE_CAT';

export interface ICat {
    id?:number,
    bio?:string,
    pic?:string
}


export type actionCreateSetOneCat = {
    type: typeof FETCH_ITEM_ONE_CAT,
    cat: ICat
}
