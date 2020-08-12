import { INITIAL_JOBS_CHANGED, STARTED_AND_END_CHANGED } from './actionsTypes'
import { BASEURL, headers } from '../config/config'
import { TJob } from '../types/types'

export const initialJobsChanged = (jobs: TJob[])  => ({
    type: INITIAL_JOBS_CHANGED,
    payload: jobs
})


export const fetchJobsInitial = (page: number) => {
    return (dispatch: any) => {
        fetch(`${BASEURL}positions.json?page=${page}`, {headers, mode: "cors"})
            .then(res => res.json())
            .then((jobs: TJob[]) => dispatch(initialJobsChanged(jobs)))
            .catch(() => {throw new Error("Error Fetch Jobs Initial!")})
    }
}

export const updateEndAndStart = () => ({
    type: STARTED_AND_END_CHANGED,   
})