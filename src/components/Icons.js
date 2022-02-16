import React from 'react'
import { IconBot } from '../styles/StyledComponents'
import { GrFacebook, GrPinterest, GrInstagram } from "react-icons/gr";

const Icons = () => {
    return (
        <div className='Icon'>

            <IconBot>
                <GrFacebook  className='icoFa'/>
                <GrPinterest className='icoPin'/>
                <GrInstagram className='icoIns'/>
            </IconBot>

        </div>

    )
}

export default Icons