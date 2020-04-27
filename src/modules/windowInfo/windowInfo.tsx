import React from 'react';
import {globalStateType} from "../../useredux/reducer/combineReducer";
import {useSelector} from "react-redux";
import {ICat} from "../../useredux/actions/discriptionItem";
import {Iitems} from "../../useredux/actions/setItems";

import './windowInfo.scss'


// type CardProps = {
//     title: string,
//     paragraph: string
// }

const WindowInfo:React.FC = ()=> {
    const selectItemCat = (state: globalStateType) => state.OneCat;
    const oneCat:ICat = useSelector(selectItemCat);

    const selectItems = (state: globalStateType) => state.Items;
    const items:Array<Iitems> = useSelector(selectItems);

    const oneShortItem = Object.keys(oneCat).length?items.find((item)=>item.id===oneCat.id):null

    return (
        Object.keys(oneCat).length?
        <aside className={"info_window"}>
            <div className={"name_img"}>
                <div className={'name_shortInfo'}>
                    <h3>{oneShortItem?.name}</h3>
                    <p>{oneShortItem?.shortInfo}</p>
                </div>
                <div className={'imgCat'}>
                    <img src={`https://www.mrsoft.by/tz20/pics/${oneCat.id}.jpg`} alt={oneShortItem?.name}/>
                </div>
            </div>

            <p>{oneCat.bio}</p>
        </aside>:null
    )
}

export default WindowInfo;
