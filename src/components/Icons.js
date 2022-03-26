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
            <h4 className='dev'>Desarrollado por David Bolivar </h4>
        </div>

    )
}

export default Icons