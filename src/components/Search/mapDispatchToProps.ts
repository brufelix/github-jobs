import { bindActionCreators } from 'redux'
import {search, descriptionChange, locationChanged, clearJobsCache, clearJobsVisible, 
    clearValuleExpectedCache, clearState, resettingStartEndValues, searchCache, updatePage, 
    initializePages, updateEndJobs, updateIsSearch, updateJobsVisible } from '../../redux/actions'

export default (dispatch: any) => 
bindActionCreators({ descriptionChange, locationChanged, search, clearJobsCache, clearJobsVisible, initializePages,clearState,
    resettingStartEndValues, searchCache, updatePage, clearValuleExpectedCache, updateEndJobs,
        updateIsSearch, updateJobsVisible}, dispatch)