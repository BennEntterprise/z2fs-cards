import {createStore, combineReducers, compose } from 'redux' 

import { composeWithDevTools } from 'redux-devtools-extension'

import { counterInitialState } from './reducers/counterReducer'
// Import Reducers
import counterReducer from './reducers/counterReducer' 


interface appState {
    counter: {
        count: number
    }
}

// Set Initial State
const initialState: appState = {
    counter: counterInitialState
}

const rootReducer = combineReducers({
     counter: counterReducer
})

const store: any =  createStore(
    rootReducer,
    initialState,
    composeWithDevTools()
)

export default store;