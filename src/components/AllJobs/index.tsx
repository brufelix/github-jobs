import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { IoMdArrowRoundBack } from 'react-icons/io'

import { fetchJobs, fetchJobsCache  } from '../../utils/functions'
import { updateEndAndStart, updateJobsVisible, updatePage, updateEndJobs, updadeValueExpectedCache } from '../../redux/actions'
import { TJobCard, TStateGithubJob } from '../../types/types'
import JobCard from '../JobCard/'
import './AllJobs.css'

export default function AllJobs() {

    const dispatch = useDispatch()

    const jobsVisible = useSelector((state: TStateGithubJob) => state.githubjobs.jobsVisible)
    const jobsCache = useSelector((state: TStateGithubJob) => state.githubjobs.jobsCache)
    const page = useSelector((state: TStateGithubJob) => state.githubjobs.page)
    const valueExpectedCache = useSelector((state: TStateGithubJob) => state.githubjobs.valueExpectedCache)
    const end = useSelector((state: TStateGithubJob) => state.githubjobs.end)
    const endJobs = useSelector((state: TStateGithubJob) => state.githubjobs.endJobs)

    function getMoreJobs() {
        if (jobsVisible.length < jobsCache.length ) {
            if (jobsCache.length === valueExpectedCache) {
                fetchJobsCache(dispatch, page)
                dispatch(updadeValueExpectedCache())
                dispatch(updatePage())
            }
            dispatch(updateJobsVisible(jobsCache))
            dispatch(updateEndAndStart())
        }
        if ( end > jobsCache.length) dispatch(updateEndJobs(true))
        }

    useEffect(() => {
        fetchJobs(dispatch, page)
        dispatch(updatePage())
    }, [])

    return (
        <>
            <div className="search">
                <IoMdArrowRoundBack style={{marginRight: "3px", marginLeft: '10px',color: "#005194"}}/>
                <div className="left">
                    <a className="back" href="/">Back to search</a>
                </div>
            </div>
            <h2 className="title-feed">All jobs</h2>
            <div className="app-JobOpportunity-container">
                    {jobsVisible.map((job: TJobCard, index: number) => 
                         <JobCard company={job.company} created_at={job.created_at} location={job.location} 
                            title={job.title} type={job.type} key={index} id={job.id} />)}
            </div> 
            <div className="div-pagination">
                 {!endJobs &&
                     <button id="button-pagination" onClick={() => getMoreJobs()}>More Awesome Jobs</button>}
            </div>
        </>
    )

}