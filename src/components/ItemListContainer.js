import React from 'react'
import ".././style.css"

const ItemListContainer = props => {
    const {greeting} = props;
    return(
        <div className='greeting'> <p > {greeting} </p> </div>
    )
}
export default ItemListContainer