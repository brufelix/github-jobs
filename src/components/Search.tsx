import React, { Component, ReactHTMLElement } from 'react'
import {FaSearch } from 'react-icons/fa'
import { GoLocation } from 'react-icons/go'
import { bindActionCreators } from 'redux'
import { connect, ConnectedProps } from 'react-redux'

import {search, descriptionChange, locationChanged, clearJobsCache, clearJobsVisible,
    resettingStartEndValues} from '../redux/actions'
import { TStateGithubJob, TPropsSearch } from '../types/types'
import './Search.css'

type PropsFromRedux = ConnectedProps<typeof connector>
type Props = PropsFromRedux & TPropsSearch

class Search extends Component<Props> {

    keyHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter'){
            this.handleClickSearch()
        }
    }

    handleClickSearch() {
        const { jobDescription, location, search, resettingStartEndValues, clearJobsCache, 
            clearJobsVisible, setAllJobs} = this.props
        setAllJobs(false)
        clearJobsVisible()
        clearJobsCache()
        resettingStartEndValues()
        search(jobDescription, location)
    }

    render() {
        const { jobDescription, location, descriptionChange, locationChanged } = this.props

        return(
            <div className="App-search">
                <div className="search-field-containes">
                    <div className="box">
                        <FaSearch style={{marginRight: "15px", marginLeft: "5px"}}/>
                        <input name="Job Description" type="text" onChange={descriptionChange} onKeyUp={this.keyHandler}
                            placeholder="Filter by title, benefits, companies, expertise" value={jobDescription}/> 
                        <label htmlFor="Job Description" className="label-name">Job Description</label>
                    </div>
                    |  
                    <div className="box">
                        <GoLocation style={{marginRight: "15px", marginLeft: "12px"}}/>
                        <input name="Location" type="text" onChange={locationChanged} onKeyUp={this.keyHandler}
                            placeholder="Filtrer by city, state, zip code or country" value={location}/>
                        <label className="label-name" htmlFor="Location">Location</label>
                    </div>
                    <button onClick={() => this.handleClickSearch()}>Search</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state: TStateGithubJob ) => ({
    jobsVisible: state.githubjobs.jobsVisible, 
    jobsCache: state.githubjobs.jobsCache, 
    start: state.githubjobs.start, 
    end: state.githubjobs.end, 
    page: state.githubjobs.page, 
    endJobs: state.githubjobs.endJobs,
    valueExpectedCache: state.githubjobs.valueExpectedCache,
    jobDescription: state.githubjobs.jobDescription,
    location: state.githubjobs.location
})
const mapDispatchToProps = (dispatch: any) => 
    bindActionCreators({ descriptionChange, locationChanged, search, clearJobsCache, clearJobsVisible, 
        resettingStartEndValues}, dispatch)
const connector = connect(mapStateToProps, mapDispatchToProps)

export default connector(Search)