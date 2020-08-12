import { TAction, TGithubJob } from '../types/types'
import { INITIAL_JOBS_CHANGED, STARTED_AND_END_CHANGED } from './actionsTypes'
const INITIAL_STATE: TGithubJob = { githubjobs: {
    jobsVisible: [], jobsCache: [], start: 0, end: 9, page: 1, endJobs: false }
}

export default (state = INITIAL_STATE, action: TAction) => {
    switch(action.type) {
        case INITIAL_JOBS_CHANGED: 
            return {
                ...state, jobsCache: action.payload, 
                jobsVisible: action.payload.slice(state.githubjobs.start, state.githubjobs.end)
            }
        case STARTED_AND_END_CHANGED: 
            return {
                ...state, start: state.githubjobs.start + 9, end: state.githubjobs.start + 9     
            }
        default:
            return state
    }
}