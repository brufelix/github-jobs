import React, {Component} from 'react'
import { TJobCard } from '../types/types'
import JobCard from './JobCard'
import { BASEURL, headers } from '../config/config'
import './Feed.css'

class Feed extends Component<{}, {jobs: []}> {
    
    constructor(props: {}){
        super(props)
        this.state = { jobs: [] }
        this.getJobs.bind(this)
    }
    
    async getJobs() {
        await fetch(`${BASEURL}positions.json?description=node&page=2`, {headers, mode: "cors"})
            .then(res => res.json())
            .then(res => {this.setState({ jobs: res }) })
            .catch(() =>  console.log("Error"))
    }
    
    componentDidMount() {
        this.getJobs()
    }

    render(){
        const { jobs } = this.state
        return (
            <React.StrictMode>
                <div className="App-JobOpportunity-container">
                    {jobs.map((job: TJobCard, index: number) => 
                        <JobCard company={job.company} created_at={job.created_at} location={job.location} 
                        title={job.title} type={job.type} key={index}/>)}
                </div>
                <div className="div-pagination">
                    <button id="button-pagination" onClick={() => this.getJobs()}>More Awesome Jobs</button>
                </div>
            </React.StrictMode>
        )
    }
}

export default Feed