import React, {Component} from 'react'
import { bindActionCreators } from 'redux'
import { connect, ConnectedProps } from 'react-redux'

import { fetchJobsInitial, updateEndAndStart } from '../redux/actions'
import { TJobCard, TGithubJob, TProps } from '../types/types'
import JobCard from './JobCard'
import './Feed.css'

type PropsFromRedux = ConnectedProps<typeof connector>
type Props = PropsFromRedux & TProps

class Feed extends Component<Props, TGithubJob> {
    constructor(props: Props) {
        super(props)
        // this.state = { jobsVisible: [], jobsCache: [], start: 0, end: 9, page: 1, endPage: false }
        // this.getMoreJobs.bind(this)
    }
    
    // updateJobsVisible() {
    //     // const { jobsVisible, jobsCache, start, end } = this.state 
    //     // this.setState({ jobsVisible: jobsVisible.concat(jobsCache.slice(start, end)) })
    //     // this.updateEndAndStart()
    // }    

    // updateEndAndStart() {
    //     const { start, end } = this.state
    //     this.setState({ start: start + 9, end: end + 9 })
    // }

    // async getMoreJobs() {
    //     let { jobsVisible, jobsCache, page, endPage } = this.state
    //     if ( page === 1 && jobsVisible.length < jobsCache.length ) {
    //         this.updateJobsVisible()
    //     } else {
    //         this.setState({ page: page + 1 })
    //         this.updateEndAndStart()
    //         await fetch(`${BASEURL}positions.json?page=${page}`, {headers, mode: "cors"})
    //             .then(jobs => jobs.json())
    //             .then((jobs: TJob[]) => {
    //                 if(jobs.length < 50) this.setState({ endPage: !endPage }) 
    //                 this.setState({ jobsCache: jobsCache.concat(jobs) })
    //                 this.updateJobsVisible()                
    //             }).catch(err => console.log(err))
    //     }
    // }
    
    // async getInitialJobs() {
    //     let { start, end, page } = this.state
    //     await fetch(`${BASEURL}positions.json?page=${page}`, {headers, mode: "cors"})
    //     .then(jobs => jobs.json())
    //     .then((jobs: TJob[]) => {
    //         this.setState({  jobsVisible: jobs.slice(start, end), jobsCache: jobs })                
    //         this.updateEndAndStart()
    //     }).catch(err => console.log(err))
    // }

    componentDidMount() {
        const { page, updateEndAndStart, fetchJobsInitial } = this.props
        fetchJobsInitial(page)
        updateEndAndStart()
    }

    render(){
        const { jobsVisible, endJobs } = this.props
        return (
            <React.StrictMode>
                <h2 className="Title-feed">Newly Added Jobs</h2>
                <div className="App-JobOpportunity-container">
                    {jobsVisible && jobsVisible.map((job: TJobCard, index: number) => 
                        <JobCard company={job.company} created_at={job.created_at} location={job.location} 
                        title={job.title} type={job.type} key={index}/>)}
                </div>
                <div className="div-pagination">
                    {!endJobs &&
                        <button id="button-pagination" onClick={() => ''}>More Awesome Jobs</button>}
                </div>
            </React.StrictMode>
        )
    }
}

const mapStateToProps = (state: TGithubJob) => ({
    jobsVisible: state.githubjobs.jobsVisible, 
    jobsCache: state.githubjobs.jobsCache, 
    start: state.githubjobs.start, 
    end: state.githubjobs.end, 
    page: state.githubjobs.page, 
    endJobs: state.githubjobs.endJobs
})
const mapDispatchToProps = (dispatch: any) => 
    bindActionCreators({ fetchJobsInitial, updateEndAndStart }, dispatch)
const connector = connect(mapStateToProps, mapDispatchToProps)

export default connector(Feed)