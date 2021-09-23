import React from 'react'
import './AllDecksContainer.css'

import colors from '../lib/constants/colors'
function AllDecksContainer() {
    return (
        <div id="all-decks-container"
            style={{
                backgroundColor: colors.cornFlowerBlue,
                color: colors.white
            }}
        >
            <h4>All Decks Container</h4>
            <p>Some Content</p>
            <p>Some Content</p>
            <p>Some Content</p>
            <p>Some Content</p>
            <p>Some Content</p>
            <p>Some Content</p>
            <p>Some Content</p>
            <p>Some Content</p>
        </div>
    )
}

export default AllDecksContainer
