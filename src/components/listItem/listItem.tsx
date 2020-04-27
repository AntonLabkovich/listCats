import React from 'react';

import './listItem.scss'


type listItemProps = {
    id: number,
    name: string,
    shortInfo: string,
    handleClickAdd: any,
    handleClickRemove: any,
    handleClickReestablish:any,
    deleted: boolean
    children: React.ReactNode
}


const ListItem: React.FC<listItemProps> = ({name, shortInfo, id, deleted, handleClickAdd, handleClickRemove, handleClickReestablish,children}: listItemProps) => {


    return (
        <section key={id} className={'list__item'}>
            {!deleted ?
                <div className={'list__item-show_more'}>
                    <div className={'more'}
                         onClick={handleClickAdd}>
                        <span>Подробнее</span>
                    </div>
                    <div className={'delete'}
                         onClick={handleClickRemove}>
                        <span>Удалить</span>
                    </div>
                </div> :
                <div className={"list__item-show_more"}>
                    <div className={'reestablish'}
                         onClick={handleClickReestablish}>
                        <span>Востановить</span>
                    </div>
                </div>}

            <div className={'list__item-disc'}>
                <span className={"leftTop-square"}/>
                <span className={"rightTop-square"}/>
                <div className={"text__item"}>
                    <p className={"list__item--title"}>
                        {name}
                    </p>
                    <p className={"list__item--info"}>{shortInfo}</p>
                </div>
                    {children}

                <span className={"leftBottom-square"}/>
                <span className={"rightBottom-square"}/>
            </div>
        </section>
    )
}

export default ListItem;
