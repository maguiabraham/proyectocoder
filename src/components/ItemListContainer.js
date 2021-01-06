import React from 'react'
import ItemCount from './ItemCount'
import ".././style.css"



const ItemListContainer = props => {
    const {greeting} = props;
    return(
        <>
        <div className='greeting'> <p > {greeting} </p> </div>
        <ItemCount stock={15} initial={1} />
        
        </>
    )
}
export default ItemListContainer