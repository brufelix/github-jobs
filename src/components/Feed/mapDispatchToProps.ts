import { bindActionCreators } from 'redux'
import { updateEndAndStart, updateJobsVisible, updatePage, updateEndJobs, 
    resettingStartEndValues, clearJobsCache, clearJobsVisible, initializePages, clearValuleExpectedCache,
    updadeValueExpectedCache,  searchCache, fetchInitJobs, updateIsSearch } from '../../redux/actions'

export default (dispatch: any) => bindActionCreators({ 
    resettingStartEndValues, clearJobsCache, clearJobsVisible, initializePages, clearValuleExpectedCache,
    updateEndAndStart, updateJobsVisible, updatePage, updateEndJobs, updadeValueExpectedCache, 
    searchCache, fetchInitJobs, updateIsSearch}, dispatch)