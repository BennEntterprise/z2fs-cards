import React from 'react'
import colors from '../lib/constants/colors'

import './ModeContainer.css'

function ModeContainer() {

    let active = 'study'
    const oopsAlert =() => alert('Oops, edit isn\'t functional yet')
    return (
        <div id="mode-container"
            style={{
                backgroundColor: colors.darkCornFlowerBlue,
                color: colors.white
            }}
        >
            <p 
                onClick={() => oopsAlert()}
                className={active === 'edit' ?'isActive' : '' }>Edit</p>
            <p>|</p>
            <p className={active === 'study' ?'isActive' : '' }>Study</p>
        </div>
    )
}

export default ModeContainer
