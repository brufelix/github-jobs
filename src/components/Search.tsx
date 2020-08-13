import React, { Component } from 'react'
import {FaSearch } from 'react-icons/fa'
import { GoLocation } from 'react-icons/go'
import './Search.css'

class Search extends Component {
    render() {
        return(
            <div className="App-search">
                <div className="search-field-containes">
                    <div className="box">
                        <FaSearch style={{marginRight: "15px", marginLeft: "5px"}}/>
                        <input name="Job Description" type="text" placeholder="Filter by title, benefits, companies, expertise"/> 
                        <label htmlFor="Job Description" className="label-name">Job Description</label>
                    </div>
                    |  
                    <div className="box">
                        <GoLocation style={{marginRight: "15px", marginLeft: "12px"}}/>
                        <input name="Location" type="text" placeholder="Filtrer by city, state, zip code or country"/>
                        <label className="label-name" htmlFor="Location">Location</label>
                    </div>
                    <button >Search</button>
                </div>
            </div>
        )
    }
}

export default Search