import React, { Component } from 'react'
import {FaSearch } from 'react-icons/fa'
import { GoLocation } from 'react-icons/go'
import { connect, ConnectedProps, useDispatch, useSelector } from 'react-redux'

import { BASEURL, headers } from '../../config/config'
import {search, descriptionChange, locationChanged, clearJobsCache, clearJobsVisible, 
    clearValuleExpectedCache, clearState, resettingStartEndValues, searchCache, updatePage, 
    initializePages, updateEndJobs, updateIsSearch, updateJobsVisible, jobsCacheChanged, updateEndAndStart} from '../../redux/actions'
import mapStateToProps from './mapStateToProps'
import mapDispatchToProps from './mapDispatchToProps'
import { TPropsSearch, TStateGithubJob, TJob} from '../../types/types'
import './Search.css'

export default function Search() {

    const dispatch = useDispatch()

    const jobsVisible = useSelector((state: TStateGithubJob) => state.githubjobs.jobsVisible)
    const jobsCache = useSelector((state: TStateGithubJob) => state.githubjobs.jobsCache)
    const page = useSelector((state: TStateGithubJob) => state.githubjobs.page)
    const endJobs = useSelector((state: TStateGithubJob) => state.githubjobs.endJobs)
    const valueExpectedCache = useSelector((state: TStateGithubJob) => state.githubjobs.valueExpectedCache)
    const jobDescription = useSelector((state: TStateGithubJob) => state.githubjobs.jobDescription)
    const location = useSelector((state: TStateGithubJob) => state.githubjobs.location)
    const end = useSelector((state: TStateGithubJob) => state.githubjobs.end)
    
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

// type PropsFromRedux = ConnectedProps<typeof connector>
// type Props = PropsFromRedux & TPropsSearch

// class Search extends Component<Props> {

//     keyHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
//         if (e.key === 'Enter'){
//             this.handleClickSearch()
//         }
//     }

//     handleClickSearch() {
//         const { jobDescription, location, resettingStartEndValues, clearJobsCache,
//             clearJobsVisible, searchCache, updateIsSearch, initializePages, clearValuleExpectedCache } = this.props
            
//             initializePages()
//             clearJobsVisible()
//             clearJobsCache()
//             resettingStartEndValues()
//             clearValuleExpectedCache()
//             searchCache(1, jobDescription, location)
//             updateIsSearch(true)
//         }


//     render() {
//         const { jobDescription, location, descriptionChange, locationChanged } = this.props

//         return(
//             <>
//                 <div className="App-search">
//                     <div className="search-field-containes">
//                         <div className="box">
//                             <FaSearch style={{marginRight: "15px", marginLeft: "5px"}}/>
//                             <input name="Job Description" type="text" onChange={descriptionChange} onKeyUp={this.keyHandler}
//                                 placeholder="Filter by title, benefits, companies, expertise" value={jobDescription}/> 
//                             <label htmlFor="Job Description" className="label-name">Job Description</label>
//                         </div>
//                         |  
//                         <div className="box">
//                             <GoLocation style={{marginRight: "15px", marginLeft: "12px"}}/>
//                             <input name="Location" type="text" onChange={locationChanged} onKeyUp={this.keyHandler}
//                                 placeholder="Filtrer by city, state, zip code or country" value={location}/>
//                             <label className="label-name" htmlFor="Location">Location</label>
//                         </div>
//                         <button onClick={() => this.handleClickSearch()}>Search</button>
//                     </div>
//                 </div>
//             </>
//         )
//     }
// }

// const connector = connect(mapStateToProps, mapDispatchToProps)

// export default connector(Search)