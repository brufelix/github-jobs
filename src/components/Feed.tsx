import React, {Component} from 'react'
import { TJobCard, TJob } from '../types/types'
import JobCard from './JobCard'
import { BASEURL, headers } from '../config/config'
import './Feed.css'

class Feed extends Component<{}, {jobsVisible: TJob[], jobsCache: TJob[], start: number, end: number, page: number}> {
    constructor(props: {}){
        super(props)
        this.state = { jobsVisible: [], jobsCache: [], start: 0, end: 9, page: 1 }
        this.getMoreJobs.bind(this)
    }
    
    updateJobsVisible() {
        const { jobsVisible, jobsCache, start, end } = this.state 
        this.setState({ jobsVisible: jobsVisible.concat(jobsCache.slice(start, end)) })
        this.updateEndAndStart()
    }    

    updateEndAndStart() {
        const { start, end } = this.state
        this.setState({ start: start + 9, end: end + 9 })
    }

    async getMoreJobs() {
        let { jobsVisible, jobsCache, page } = this.state
        if ( page === 1 && jobsVisible.length < jobsCache.length ) {
            this.updateJobsVisible()
        } else {
            this.setState({ page: page + 1 })
            this.updateEndAndStart()
            await fetch(`${BASEURL}positions.json?page=${page}`, {headers, mode: "cors"})
                .then(jobs => jobs.json())
                .then((jobs: TJob[]) => {
                    this.setState({ jobsCache: jobsCache.concat(jobs) })
                    this.updateJobsVisible()                
                }).catch(err => console.log(err))
        }
    }
    
    async getInitialJobs() {
        let { start, end, page } = this.state
        await fetch(`${BASEURL}positions.json?page=${page}`, {headers, mode: "cors"})
        .then(jobs => jobs.json())
        .then((jobs: TJob[]) => {
            this.setState({  jobsVisible: jobs.slice(start, end), jobsCache: jobs })                
            this.updateEndAndStart()
        }).catch(err => console.log(err))
    }

    componentDidMount() {
        this.getInitialJobs()
    }

    render(){
        const { jobsVisible } = this.state
        return (
            <React.StrictMode>
                <h2 className="Title-feed">Newly Added Jobs</h2>
                <div className="App-JobOpportunity-container">
                    {jobsVisible.map((job: TJobCard, index: number) => 
                        <JobCard company={job.company} created_at={job.created_at} location={job.location} 
                        title={job.title} type={job.type} key={index}/>)}
                </div>
                <div className="div-pagination">
                    <button id="button-pagination" onClick={() => this.getMoreJobs()}>More Awesome Jobs</button>
                </div>
            </React.StrictMode>
        )
    }
}

export default Feed