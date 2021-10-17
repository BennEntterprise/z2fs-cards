import { AppModes } from '../lib/appModes.d'


export const modeInitialState: AppModes  = AppModes.STUDY || ''

const modeReducer = (state = modeInitialState, action: any) => {
    switch (action.type){
        case 'SET_MODE_EDIT': 
            return AppModes.EDIT
        case 'SET_MODE_STUDY':
            return AppModes.STUDY
        default: 
            return state;
    }
}

export default modeReducer;