import React from 'react'
import colors from '../lib/constants/colors'

import './ModeContainer.css'

import { useSelector, useDispatch } from 'react-redux'
import { appState } from '../redux/store'
function ModeContainer() {

    // Get the Mode State from Redux
    let active = useSelector((state: appState) => state.mode);
    const dispatch = useDispatch();
    const setMode = (newMode:string) => {

        console.log('settingNewMode: ', newMode);
        // dispatch an action to change the mode state.
        if(newMode === 'edit'){
            alert('edit mode not yet supported')
            // dispatch({
            //     type: 'SET_MODE_EDIT'
            // })
        }
        if(newMode === 'study'){
            dispatch({
                type: 'SET_MODE_STUDY'
            })
        }

    }
    
    return (
        <div id="mode-container"
            style={{
                backgroundColor: colors.darkCornFlowerBlue,
                color: colors.white
            }}
        >
            <p 
                onClick={(e) => setMode('edit')}
                className={active === 'edit' ?'isActive' : '' }>Edit</p>
            <p>|</p>
            <p 
                onClick={(e) => setMode('study')}
                className={active === 'study' ?'isActive' : '' }>Study</p>
        </div>
    )
}

export default ModeContainer
