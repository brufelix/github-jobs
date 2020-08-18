import React, { Component } from 'react'
import {FaSearch } from 'react-icons/fa'
import { GoLocation } from 'react-icons/go'
import { connect, ConnectedProps } from 'react-redux'

import mapStateToProps from './mapStateToProps'
import mapDispatchToProps from './mapDispatchToProps'
import { TPropsSearch} from '../../types/types'
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
        const { jobDescription, location, resettingStartEndValues, clearJobsCache,
            clearJobsVisible, searchCache, updateIsSearch, initializePages, clearValuleExpectedCache } = this.props
            
            initializePages()
            clearJobsVisible()
            clearJobsCache()
            resettingStartEndValues()
            clearValuleExpectedCache()
            searchCache(1, jobDescription, location)
            updateIsSearch(true)
        }


    render() {
        const { jobDescription, location, descriptionChange, locationChanged } = this.props

        return(
            <>
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
            </>
        )
    }
}

const connector = connect(mapStateToProps, mapDispatchToProps)

export default connector(Search)