import { bindActionCreators } from 'redux'
import { updateEndAndStart, updateJobsVisible, updatePage, updateEndJobs, 
    updadeValueExpectedCache,  searchCache, fetchInitJobs, updateIsSearch } from '../../redux/actions'

export default (dispatch: any) => bindActionCreators({ 
    updateEndAndStart, updateJobsVisible, updatePage, updateEndJobs, updadeValueExpectedCache, 
    searchCache, fetchInitJobs, updateIsSearch}, dispatch)