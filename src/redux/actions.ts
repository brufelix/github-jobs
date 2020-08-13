import { JOBS_CHANGED, START_AND_END_CHANGED, CLEAR_JOBS_VISIBLE, RESETTING_START_AND_END_VALUES,
    UPDATE_VISIBLE_JOBS, PAGE_CHANGED, UPDATE_END_JOBS, JOBS_CACHE_CHANGED, 
    VALUE_EXPECTED_CACHE_CHANGED, DESCRIPTION_CHANGED, LOCATION_CHANGED, CLEAR_JOBS_CACHE} from './actionsTypes'
import { BASEURL, headers } from '../config/config'
import { TJob } from '../types/types'

export const descriptionChange = (e: any) => ({
    type: DESCRIPTION_CHANGED,
    payload: e.target.value
})

export const locationChanged = (e: any) => ({
    type: LOCATION_CHANGED,
    payload: e.target.value
})

export const jobsChanged = (jobs: TJob[])  => ({
    type: JOBS_CHANGED,
    payload: jobs
})

export const clearJobsVisible = () => ({
    type: CLEAR_JOBS_VISIBLE
})

export const jobsCacheChanged = (jobsCache: TJob[])  => ({
    type: JOBS_CACHE_CHANGED,
    payload: jobsCache
})

export const clearJobsCache = () => ({
    type: CLEAR_JOBS_CACHE
})

export const updateJobsVisible = (jobsCache: TJob[]) => ({
    type: UPDATE_VISIBLE_JOBS,
    payload: jobsCache
})

export const updateEndAndStart = () => ({
    type: START_AND_END_CHANGED,   
})

export const resettingStartEndValues = () =>({
    type: RESETTING_START_AND_END_VALUES
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

export const search = (jobDescription: string = "", location: string = "") => {
    return (dispatch: any) => {
        fetch(`${BASEURL}positions.json?description=${jobDescription}&location=${location}`
            , {headers, mode: "cors"})
            .then(res => res.json())
            .then((jobs: TJob[]) => dispatch(jobsChanged(jobs)))
            .then(() => dispatch(updateEndAndStart()))
            .catch(() => {throw new Error("Error Fetch Jobs!")} )
    }
}

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