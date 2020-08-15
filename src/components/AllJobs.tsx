import React, {Component} from 'react'
import { bindActionCreators } from 'redux'
import { connect, ConnectedProps } from 'react-redux'
import Search from './Search'
import { fetchJobs, fetchJobsCache, updateEndAndStart, updateJobsVisible,
    updatePage, updateEndJobs, updadeValueExpectedCache } from '../redux/actions'
import { TJobCard, TStateGithubJob, TPropsFeed } from '../types/types'
import JobCard from './JobCard'
import './Feed.css'

type PropsFromRedux = ConnectedProps<typeof connector>
type Props = PropsFromRedux & TPropsFeed

class Feed extends Component<Props> {
    constructor(props: Props) {
        super(props)
        this.getMoreJobs.bind(this)
    }

    async getMoreJobs() {
        const { jobsVisible, jobsCache, page, valueExpectedCache, end, updateEndJobs, updatePage, 
            updateJobsVisible, updateEndAndStart, fetchJobsCache, updadeValueExpectedCache } = this.props
            if (jobsVisible.length < jobsCache.length ) {
                if (jobsCache.length === valueExpectedCache) {
                    fetchJobsCache(page)
                    updadeValueExpectedCache()
                    updatePage()
                }
                updateJobsVisible(jobsCache)
                updateEndAndStart()
            }
            if ( end > jobsCache.length) updateEndJobs()
    }

    componentDidMount() {
        const { page,  fetchJobs, fetchJobsCache, updatePage } = this.props
            fetchJobs(page)
            fetchJobsCache(page)
            updatePage()
    }

    render(){
        const { jobsVisible, endJobs } = this.props
        
        return (
            <React.StrictMode>
                <Search />
                <h2 className="Title-feed">Newly Added Jobs</h2>
                <div className="App-JobOpportunity-container">
                    {jobsVisible.map((job: TJobCard, index: number) => 
                        <JobCard company={job.company} created_at={job.created_at} location={job.location} 
                        title={job.title} type={job.type} key={index}/>)}
                </div>
                <div className="div-pagination">
                    {!endJobs &&
                        <button id="button-pagination" onClick={() => this.getMoreJobs()}>More Awesome Jobs</button>}
                </div>
            </React.StrictMode>
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
    location: state.githubjobs.location,
    currentDescription: state.githubjobs.currentDescription, 
    currentLocation: state.githubjobs.currentLocation,
    isSearch: state.githubjobs.isSearch
})

const mapDispatchToProps = (dispatch: any) => 
    bindActionCreators({ fetchJobs, fetchJobsCache, updateEndAndStart, updateJobsVisible, updatePage, 
        updateEndJobs, updadeValueExpectedCache }, dispatch)

const connector = connect(mapStateToProps, mapDispatchToProps)

export default connector(Feed)