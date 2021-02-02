import React, { useContext } from 'react';
import {CartContext} from '.././CartContext'
import { AccessAlarm, ThreeDRotation } from '@material-ui/icons';
import LocalMallIcon from '@material-ui/icons/LocalMall';


const CartWidget = () =>{

    const { cantidadTotal } = useContext(CartContext)

    return (
        <div className="cartWidget">


            { cantidadTotal > 0 ? 
            (<>
            <h5 className='widget'>{cantidadTotal} <LocalMallIcon/> </h5>
            </>)
            : <LocalMallIcon/>
            }


        </div>
    )
}
export default CartWidget
