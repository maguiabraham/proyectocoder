import { render } from "@testing-library/react"
import React, { Component } from "react" 
import { AccessAlarm, ThreeDRotation } from '@material-ui/icons';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import ".././style.css"

class CartWidget extends Component {
    render() {
            return (
                <div>
                    <a href="#"><LocalMallIcon/></a>
                </div>
            )
        }
        
    }

export default CartWidget