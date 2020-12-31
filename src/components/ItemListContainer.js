import React from 'react'
import ".././style.css"

const ItemListContainer = props => {
    const {item} = props;
    return(
        <div className='item'> <p > {item} </p> </div>
    )
}
export default ItemListContainer