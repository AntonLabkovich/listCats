import {setItems} from "../../useredux/reducer/items";

import React, {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import axios from 'axios'

import List from "../../modules/list/list";
import WindowInfo from "../../modules/windowInfo/windowInfo";
import './fullPage.scss'
import {searchItems} from "../../useredux/reducer/filter";




const FullPage: React.FC = () => {
    const [basePath, setPath] = useState('');
    const requestUrl: string = 'https://mrsoft.by/tz20/list.json';
    const proxy: string = "https://cors-anywhere.herokuapp.com/";

    const dispatch = useDispatch();

    useEffect(() => {
        axios.get(proxy + requestUrl)
            .then((res: any) => {
                dispatch(setItems(res.data.data));
                dispatch(searchItems(res.data.data));
                setPath(res.data.basepath);

            })
    }, [])

    return (
        <main className="fullPage">
            <List basePath={basePath}/>
            <WindowInfo/>
        </main>
    )
}

export default FullPage;
