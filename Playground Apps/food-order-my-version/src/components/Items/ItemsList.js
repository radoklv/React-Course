import {useContext} from 'react';
import AppContext from '../../store/app-context'
import Item from './Item'
import style from './ItemsList.module.css'

const ItemList = () => {
    const context = useContext(AppContext)

    return (
        <ul className={style['items-list']}>
            {
                context.meals.map(item =>{
                    return <Item item={item} key={item.id}></Item>
                })
            }
        </ul>
    )
}

export default ItemList
