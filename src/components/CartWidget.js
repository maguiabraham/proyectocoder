import React, { useContext } from 'react';
import {CartContext} from '.././CartContext'
import { AccessAlarm, ThreeDRotation } from '@material-ui/icons';
import LocalMallIcon from '@material-ui/icons/LocalMall';


const CartWidget = () =>{

    const { cart } = useContext(CartContext)

    return (
        <div className="cartWidget">


            { cart.length > 0 ? 
            (<>
            <h5 className='widget'>{cart.length} <LocalMallIcon/> </h5>
            </>)
            : <LocalMallIcon/>
            }


        </div>
    )
}
export default CartWidget
