import { JOBS_CHANGED, START_AND_END_CHANGED, 
    UPDATE_VISIBLE_JOBS, PAGE_CHANGED, UPDATE_END_JOBS, JOBS_CACHE_CHANGED, VALUE_EXPECTED_CACHE_CHANGED} from './actionsTypes'
import { BASEURL, headers } from '../config/config'
import { TJob } from '../types/types'

export const jobsChanged = (jobs: TJob[])  => ({
    type: JOBS_CHANGED,
    payload: jobs
})

export const jobsCacheChanged = (jobsCache: TJob[])  => ({
    type: JOBS_CACHE_CHANGED,
    payload: jobsCache
})

export const updateJobsVisible = (jobsCache: TJob[]) => ({
    type: UPDATE_VISIBLE_JOBS,
    payload: jobsCache
})

export const updateEndAndStart = () => ({
    type: START_AND_END_CHANGED,   
})

export const updatePage = () => ({
    type: PAGE_CHANGED
})

export const updateEndJobs = () => ({
    type: UPDATE_END_JOBS
})

export const updadeValueExpectedCache = () => ({
    type: VALUE_EXPECTED_CACHE_CHANGED
})

export const fetchJobs = (page: number) => {
    return (dispatch: any) => {
        fetch(`${BASEURL}positions.json?page=${page}`, {headers, mode: "cors"})
            .then(res => res.json())
            .then((jobs: TJob[]) => dispatch(jobsChanged(jobs)))
            .then(() => dispatch(updateEndAndStart()))
            .catch(() => {throw new Error("Error Fetch Jobs Initial!")} )
    }
}

export const fetchJobsCache = (page: number) => {
    return (dispatch: any) => {
        fetch(`${BASEURL}positions.json?page=${page}`, {headers, mode: "cors"})
            .then(res => res.json())
            .then((jobs: TJob[]) => dispatch(jobsCacheChanged(jobs)))
            .catch(() => {throw new Error("Error Fetch Jobs Initial!")})
    }
}