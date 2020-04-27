

import React, {useState} from 'react';
import ListItem from "../../components/listItem/listItem";
import {globalStateType} from "../../useredux/reducer/combineReducer";
import {IdeletedItems, Iitems} from "../../useredux/actions/setItems";
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import {oneCat} from "../../useredux/reducer/discriptionCat";

import './list.scss';
import {addItemReest, removeItems} from "../../useredux/reducer/items";
import {removedRemoveItems, setRemovedItem} from "../../useredux/reducer/deletedItems";
import {searchItems} from "../../useredux/reducer/filter";

export type pathType = {
    basePath:string
}


const List:React.FC<pathType> = ({basePath})=> {

    const dispatch = useDispatch();
    const [value, setValue] = useState<string>("");



    const proxy:string = "https://cors-anywhere.herokuapp.com/";



    const selectItems = (state: globalStateType) => state.Items;
    const itemsCat:Array<Iitems> = useSelector(selectItems);

    const selectRemovedItems = (state: globalStateType) => state.RemovedItems;
    const removedCat:Array<IdeletedItems> = useSelector(selectRemovedItems);

    const selectFiltersItems = (state: globalStateType) => state.FilterItems
    const filtersCats:Array<Iitems> =  useSelector(selectFiltersItems);


    const handleClickAdd = function(e:React.MouseEvent,id:number){
        axios.get(proxy+`${basePath}/cats/${id}.json`)
            .then(data=>{
                dispatch(oneCat(data.data));

            })
    }

    const handleClickRemove = (id:number) =>{
        const newItems:Array<Iitems> = itemsCat.filter((item)=>{
            if(item.id===id){
                const deletedItem:IdeletedItems = Object.assign(item);
                deletedItem.dateDeleted = new Date();
                dispatch(setRemovedItem(deletedItem))

            }
            return item.id!==id
        })
        dispatch(removeItems(newItems));
        dispatch(searchItems(newItems));
        dispatch(oneCat({}));
        setValue("")
    }


    const handleClickReestablish = (id:number) => {

        const reestablishCat = removedCat.find((item:IdeletedItems)=>item.id===id)
        if(reestablishCat) {
            dispatch(removedRemoveItems(reestablishCat))
            delete reestablishCat.dateDeleted
            dispatch(searchItems([...itemsCat,reestablishCat]));
            dispatch(addItemReest(reestablishCat))
            console.log('востанавлемый', reestablishCat);
            setValue("")
            console.log('все+востановленный', [...itemsCat, reestablishCat])
        }
    }

    const handleChangeSearch = (e:React.ChangeEvent<HTMLInputElement>) =>{
        setValue(e.target.value);
        console.log(value)
        if(e.target.value){
            const filtersItems = itemsCat.filter((item:Iitems)=>item.name.toLowerCase().indexOf(e.target.value.toLowerCase())!==-1)
            console.log(filtersItems);
            dispatch(searchItems(filtersItems))
        }else{
            dispatch(searchItems(itemsCat))
        }

    }
    console.log('фильтрованные',filtersCats);
    return (
        <aside className={'listItems'}>
            <input type="text"
                   placeholder={'Поиск'}
                   className={'search'}
                   onChange={handleChangeSearch}
                   value={value}/>
            {filtersCats.map((item:Iitems)=>{
                return <ListItem handleClickAdd={(e: React.MouseEvent) => handleClickAdd(e, item.id)}
                                 handleClickRemove={()=>handleClickRemove(item.id)}
                                 handleClickReestablish={()=>handleClickReestablish(item.id)}
                                 name={item.name}
                                 shortInfo={item.shortInfo}
                                 id={item.id}
                                 key={item.id}
                                 deleted={false} children={null}/>
            })}
            {removedCat.length!==0?
            <div className={'removedItem'}>
            <p className={'titleRemove'}>Удаленные элементы</p>
            {removedCat.map((item:IdeletedItems)=>{
                return <ListItem handleClickAdd={(e: React.MouseEvent) => handleClickAdd(e, item.id)}
                                 handleClickRemove={()=>handleClickRemove(item.id)}
                                 handleClickReestablish={()=>handleClickReestablish(item.id)}
                                 name={item.name}
                                 shortInfo={item.shortInfo}
                                 id={item.id}
                                 key={item.id}
                                 deleted={true}>
                                <p className="date">Date deleted: {item.dateDeleted.toLocaleString()}</p>
                        </ListItem>
            })}
            </div>:null}
        </aside>
    )
}

export default List;
