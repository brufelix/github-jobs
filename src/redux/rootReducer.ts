import { combineReducers } from 'redux'
import githubJobsReducer from './reducers'

const rootReducer = combineReducers({
    githubjobs: githubJobsReducer
})

export default rootReducer