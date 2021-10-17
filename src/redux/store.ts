import {createStore, combineReducers } from 'redux' 

import { composeWithDevTools } from 'redux-devtools-extension'

import { counterInitialState } from './reducers/counterReducer'
import { modeInitialState } from './reducers/modeReducer'
// Import Reducers
import counterReducer from './reducers/counterReducer' 
import modeReducer from './reducers/modeReducer'
import { AppModes } from './lib/appModes'

export interface appState {
    counter: {
        count: number
    },
    mode: any
}

// Set Initial State
const initialState: appState = {
    counter: counterInitialState,
    mode: modeInitialState
}

const rootReducer = combineReducers({
    counter: counterReducer,
    mode: modeReducer,
})

const store: any =  createStore(
    rootReducer,
    initialState,
    composeWithDevTools()
)

export default store;