import { TAction } from '../types/types'
const INITIAL_STATE = { jobsVisible: [], jobsCache: [], start: 0, end: 9, page: 1, endPage: false }

export default (state = INITIAL_STATE, action: TAction) => {
    switch(action.type) {
        case "": 
            return {...state}
        default:
            return state
    }
}