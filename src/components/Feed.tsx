import React, {Component} from 'react'
import { TJobCard, TJob } from '../types/types'
import JobCard from './JobCard'
import { BASEURL, headers } from '../config/config'
import './Feed.css'

class Feed extends Component<{}, {jobsVisible: TJob[], jobsCache: TJob[], start: number, end: number}> {
    constructor(props: {}){
        super(props)
        this.state = { jobsVisible: [], jobsCache: [], start: 0, end: 9 }
        this.getJobs.bind(this)
    }
    
    async getJobs() {
        let { jobsCache, jobsVisible, start, end } = this.state
        if (jobsCache.length === 0){
            await fetch(`${BASEURL}positions.json?description=`, {headers, mode: "cors"})
            .then(jobs => jobs.json())
            .then((jobs: TJob[]) => {
                this.setState({ 
                    jobsVisible: jobsVisible.concat(jobs.splice(start, end)) ,
                    jobsCache: jobs
                })                
            }).catch(err => console.log(err))
        } else {
            this.setState({ 
                jobsVisible: jobsVisible.concat(jobsCache.splice(start, end)) 
            })
        }
    }
    
    componentDidMount() {
        this.getJobs()
    }

    render(){
        const { jobsVisible } = this.state
        return (
            <React.StrictMode>
                <div className="App-JobOpportunity-container">
                    {jobsVisible.map((job: TJobCard, index: number) => 
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