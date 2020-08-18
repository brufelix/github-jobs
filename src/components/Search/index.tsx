import React from 'react'
import {FaSearch } from 'react-icons/fa'
import { GoLocation } from 'react-icons/go'
import { useDispatch, useSelector } from 'react-redux'

import { BASEURL, headers } from '../../config/config'
import {descriptionChange, locationChanged, clearJobsCache, clearJobsVisible, 
    clearValuleExpectedCache, resettingStartEndValues, updatePage, initializePages, updateEndJobs, updateIsSearch, 
    updateJobsVisible, jobsCacheChanged, updateEndAndStart} from '../../redux/actions'
import { TStateGithubJob, TJob} from '../../types/types'
import './Search.css'

export default function Search() {

    const dispatch = useDispatch()

    const jobDescription = useSelector((state: TStateGithubJob) => state.githubjobs.jobDescription)
    const location = useSelector((state: TStateGithubJob) => state.githubjobs.location)
    
    function keyHandler (e: React.KeyboardEvent<HTMLInputElement>) {
        if (e.key === 'Enter'){
            handleClickSearch()
        }
    }
    
    const searchCache = (page: number, jobDescription: string = "", location: string = "") => {
        fetch(`${BASEURL}positions.json?description=${jobDescription}&location=${location}&page=${page}`
                ,{headers, mode: "cors"})
                .then(res => res.json())
                .then((jobs: TJob[]) => {
                    dispatch(jobsCacheChanged(jobs))
                    dispatch(updateJobsVisible(jobs))
                    dispatch(updateEndAndStart())
                    dispatch(updateEndJobs(jobs.length > 9 ? false : true))
                })
                .then(() => dispatch(updatePage()))
                .catch(() => {throw new Error("Error search cache!")} )
    }

    function handleClickSearch() {
            
        dispatch(initializePages())
        dispatch(clearJobsVisible())
        dispatch(clearJobsCache())
        dispatch(resettingStartEndValues())
        dispatch(clearValuleExpectedCache())
        searchCache(1, jobDescription, location)
        dispatch(updateIsSearch(true))
    }

    return (
        <>
            <div className="App-search">
                <div className="search-field-containes">
                    <div className="box">
                        <FaSearch style={{marginRight: "15px", marginLeft: "5px"}}/>
                        <input name="Job Description" type="text" onChange={(e) => dispatch(descriptionChange(e))} onKeyUp={keyHandler}
                            placeholder="Filter by title, benefits, companies, expertise" value={jobDescription}/> 
                        <label htmlFor="Job Description" className="label-name">Job Description</label>
                    </div>
                    |  
                    <div className="box">
                        <GoLocation style={{marginRight: "15px", marginLeft: "12px"}}/>
                        <input name="Location" type="text" onChange={(e) => dispatch(locationChanged(e))} onKeyUp={keyHandler}
                            placeholder="Filtrer by city, state, zip code or country" value={location}/>
                        <label className="label-name" htmlFor="Location">Location</label>
                    </div>
                    <button onClick={() => handleClickSearch()}>Search</button>
                </div>
            </div>
        </>
    )
        
}