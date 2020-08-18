import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'

import { TJobCard, TStateGithubJob, TJob } from '../../types/types'
import Search from '../Search/'
import JobCard from '../JobCard/'
import { BASEURL, headers } from '../../config/config'
import { updateEndAndStart, updateJobsVisible, updatePage, updateEndJobs, fetchJobsInitial,
    resettingStartEndValues, clearJobsCache, clearJobsVisible, initializePages, clearValuleExpectedCache,
    updadeValueExpectedCache, updateIsSearch, jobsCacheChanged } from '../../redux/actions'
import './Feed.css'

function Feed(){

    const dispatch = useDispatch()

    const jobsVisible = useSelector((state: TStateGithubJob) => state.githubjobs.jobsVisible)
    const jobsCache = useSelector((state: TStateGithubJob) => state.githubjobs.jobsCache)
    const page = useSelector((state: TStateGithubJob) => state.githubjobs.page)
    const endJobs = useSelector((state: TStateGithubJob) => state.githubjobs.endJobs)
    const valueExpectedCache = useSelector((state: TStateGithubJob) => state.githubjobs.valueExpectedCache)
    const jobDescription = useSelector((state: TStateGithubJob) => state.githubjobs.jobDescription)
    const location = useSelector((state: TStateGithubJob) => state.githubjobs.location)
    const end = useSelector((state: TStateGithubJob) => state.githubjobs.end)
    const listSearchButtons = ["Javascript", "Python", "Linux", "Scala","Android", "IOS", "Erlang", "Rails" ]
    
    const searchCache = (page: number, jobDescription: string = "", location: string = "") => {
        fetch(`${BASEURL}positions.json?description=${jobDescription}&location=${location}&page=${page}`
                ,{headers, mode: "cors"})
                .then(res => res.json())
                .then((jobs: TJob[]) => {
                    dispatch(jobsCacheChanged(jobs))
                    dispatch(updateJobsVisible(jobs))
                    dispatch(updateEndJobs(jobs.length > 9 ? false : true))
                })
                .then(() => dispatch(updatePage()))
                .catch(() => {throw new Error("Error search cache!")} )
    }

    function fetchInitJobs(page: number, jobDescription: string = "", location: string = ""){
            fetch(`${BASEURL}positions.json?description=${jobDescription}&location=${location}&page=${page}`
                ,{headers, mode: "cors"})
                .then(res => res.json())
                .then((jobs: TJob[]) => dispatch(fetchJobsInitial(jobs)))
                .catch(() => {throw new Error("Error search cache!")} )
    }

    function getMoreJobs() {
        if ( jobsCache.length === valueExpectedCache ) {
            searchCache(page, jobDescription, location)
            dispatch(updadeValueExpectedCache())
        }
            
        if (jobsVisible.length < jobsCache.length) {
            dispatch(updateJobsVisible(jobsCache))
            dispatch(updateEndAndStart())
        }

        if (end > jobsCache.length) {
            dispatch(updateEndJobs(true))
        }
    }

    useEffect(() => {
        if (end > jobsCache.length) {
            dispatch(updateEndJobs(true))
        }
    }, [jobsVisible, jobsCache])

    useEffect(() => {
        fetchInitJobs(1)
        dispatch(updateEndJobs(true))
    }, [])

    function handleClickSearch(jobDescription: string) {
        dispatch(initializePages())
        dispatch(clearJobsVisible())
        dispatch(clearJobsCache())
        dispatch(resettingStartEndValues())
        dispatch(clearValuleExpectedCache())
        searchCache(1, jobDescription)
        dispatch(updateIsSearch(true))
    }

    return (
        <>
            <Search/>
            <h2 className="title-feed">Newly Added Jobs</h2>
            <div className="app-JobOpportunity-container">
                {jobsVisible.map((job: TJobCard, index: number) => 
                    <JobCard company={job.company} created_at={job.created_at} location={job.location} 
                        title={job.title} type={job.type} key={index} id={job.id} />)}
            </div>
            {endJobs && 
                (<div className="hotSerches">
                    <h2>Hot Searches</h2>
                    <div className="buttons">
                    {listSearchButtons.map((searchName: string, index: number) => 
                        <button key={index}
                            onClick={() => handleClickSearch(searchName)}>{searchName}</button>)}
                    </div>
                </div>)}
            <div className="div-pagination">
                {!endJobs &&
                   (<button id="button-pagination" onClick={() => getMoreJobs()}>More Awesome Jobs</button>)}
            </div>
        </>
    )
}

export default Feed