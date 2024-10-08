import {
    jobsCacheChanged, updateJobsVisible, updateEndAndStart, updateEndJobs, updatePage,
    fetchJobsInitial, jobsChanged
} from '../redux/actions'
import { TJob } from '../types/types'
import { BASEURL, headers } from '../config/config'

export const searchCache = (dispatch: any, page: number, jobDescription: string = "", location: string = "") => {
    fetch(`${BASEURL}positions.json?description=${jobDescription}&location=${location}&page=${page}`
        , { headers, mode: "cors" })
        .then(res => res.json())
        .then((jobs: TJob[]) => {
            dispatch(jobsCacheChanged(jobs))
            dispatch(updateJobsVisible(jobs))
            dispatch(updateEndAndStart())
            dispatch(updateEndJobs(jobs.length > 9 ? false : true))
        })
        .then(() => dispatch(updatePage()))
        .catch(() => { throw new Error("Error search cache!") })
}

export function fetchInitJobs(dispatch: any, page: number, jobDescription: string = "", location: string = "") {
    const jobCards: TJob[] = Array.from({ length: 10 }, (_, index) => ({
        id: `job-${index + 1}`,
        title: `Job Title ${index + 1}`,
        type: 'Full-time',
        created_at: Date.now(),
        location: 'Location ' + (index + 1),
        company: `Company ${index + 1}`,
        description: `Description ${index + 1}`,
        how_to_apply: `How to apply ${index + 1}`,
    }));

    dispatch(fetchJobsInitial(jobCards))
    // fetch(`${BASEURL}positions.json?description=${jobDescription}&location=${location}&page=${page}`
    //     , { headers, mode: "cors" })
    //     .then(res => res.json())
    //     .then((jobs: TJob[]) => dispatch(fetchJobsInitial(jobs)))
    //     .catch(() => { throw new Error("Error search cache!") })
}

export function fetchJobs(dispatch: any, page: number) {
    fetch(`${BASEURL}positions.json?page=${page}`, { headers, mode: "cors" })
        .then(res => res.json())
        .then((jobs: TJob[]) => {
            dispatch(jobsChanged(jobs))
            dispatch(jobsCacheChanged(jobs))
            dispatch(updateEndAndStart())
            dispatch(updatePage)
        }).catch(() => { throw new Error("Error Fetch Jobs!") })
}

export function fetchJobsCache(dispatch: any, page: number) {
    fetch(`${BASEURL}positions.json?page=${page}`, { headers, mode: "cors" })
        .then(res => res.json())
        .then((jobs: TJob[]) => dispatch(jobsCacheChanged(jobs)))
        .catch(() => { throw new Error("Error Fetch Jobs Cache!") })
}