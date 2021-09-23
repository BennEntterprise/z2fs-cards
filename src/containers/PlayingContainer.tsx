import React from 'react'
import colors from '../lib/constants/colors'


import './PlayingContainer.css'
function PlayingContainer() {
    return (
        <div id="playing-container-transparent">
            <div id="playing-container"
                style={{
                    backgroundColor: colors.mediumAquamarine
                }}
            >
                playing container
            </div>
        </div>
    )
}

export default PlayingContainer
