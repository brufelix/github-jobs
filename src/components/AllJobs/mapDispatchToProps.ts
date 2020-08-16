import {  bindActionCreators } from 'redux'
import { fetchJobs, fetchJobsCache, updateEndAndStart, updateJobsVisible,
    updatePage, updateEndJobs, updadeValueExpectedCache } from '../../redux/actions'

export default (dispatch: any) =>  bindActionCreators({ fetchJobs, fetchJobsCache, updateEndAndStart, 
    updateJobsVisible, updatePage,  updateEndJobs, updadeValueExpectedCache }, dispatch)