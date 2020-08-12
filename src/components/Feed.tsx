import React from 'react'
import JobCard from './JobCard'
import { BASEURL, headers } from '../config/config'
import './Feed.css'

export default () => {
    const getJobs = async () => {
        fetch(`${BASEURL}positions.json?description=node&page=2`, {headers, mode: "cors"})
            .then(res => res.json())
            .then(res => console.log(res))
            .catch(() =>  console.log("Error"))
    }
    return(
        <React.StrictMode>
            <div className="App-JobOpportunity-container">
                
            </div>
            <div className="div-pagination">
                <button id="button-pagination" onClick={() => getJobs()}>More Awesome Jobs</button>
            </div>
        </React.StrictMode>
    )
}