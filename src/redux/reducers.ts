import { TAction, TGithubJob } from '../types/types'
import { JOBS_CHANGED, START_AND_END_CHANGED, CLEAR_JOBS_VISIBLE, RESETTING_START_AND_END_VALUES,
    UPDATE_VISIBLE_JOBS, PAGE_CHANGED, UPDATE_END_JOBS, JOBS_CACHE_CHANGED, VALUE_EXPECTED_CACHE_CHANGED,
    DESCRIPTION_CHANGED, LOCATION_CHANGED, CLEAR_JOBS_CACHE } from './actionsTypes'
const INITIAL_STATE: TGithubJob = { jobsVisible: [], jobsCache: [], start: 0, end: 9, 
    page: 1, endJobs: false, valueExpectedCache: 50, jobDescription: "", location: ""}

export default (state = INITIAL_STATE, action: TAction) => {
    switch(action.type) {
        case DESCRIPTION_CHANGED:
            return {...state, jobDescription: action.payload }
        
        case LOCATION_CHANGED:
            return {...state, location: action.payload}
        
        case JOBS_CHANGED: 
            return {  ...state, jobsVisible: action.payload.slice(state.start, state.end)}

        case JOBS_CACHE_CHANGED: 
            return { ...state, jobsCache: state.jobsCache.concat(action.payload) }

        case CLEAR_JOBS_CACHE:
            return { ...state, jobsCache: [] }

        case CLEAR_JOBS_VISIBLE: 
            return { ...state, jobsVisible: [] }

        case START_AND_END_CHANGED: 
            return { ...state, start: state.start + 9, end: state.end + 9 }
        
        case RESETTING_START_AND_END_VALUES: 
            return {...state, start: 0, end: 10}

        case UPDATE_VISIBLE_JOBS:
            return { ...state, jobsVisible: state.jobsVisible
                    .concat(action.payload.slice(state.start, state.end)) }
        
        case PAGE_CHANGED:
            return { ...state, page: state.page + 1 }
        
        case UPDATE_END_JOBS:
                return { ...state, endJobs: !state.endJobs }
        
        case VALUE_EXPECTED_CACHE_CHANGED:
            return {...state, valueExpectedCache: state.valueExpectedCache + 50}
        
        default:
            return state
    }
}