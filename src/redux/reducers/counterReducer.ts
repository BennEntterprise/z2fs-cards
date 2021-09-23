import {
    COUNTER_DECREMENT,
    COUNTER_INCREMENT,
    COUNTER_RESET
} from '../actionTypes'

export const counterInitialState = {
    count: 0
}

// TODO: Find the correct type for an actions from the redux pacakge?

const counterReducer = (state = counterInitialState, action: any) => {
    switch (action.type) {
        case COUNTER_INCREMENT:
            return {
                ...state,
                count: state.count + 1
            };
        case COUNTER_DECREMENT:
            return {
                ...state,
                count: state.count - 1
            };
        case COUNTER_RESET:
            return {
                ...state,
                count: 0
            };
        default:
            return state;
    }
}

export default counterReducer;
