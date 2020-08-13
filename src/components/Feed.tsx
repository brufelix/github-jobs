import React, {Component} from 'react'
import { bindActionCreators } from 'redux'
import { connect, ConnectedProps } from 'react-redux'

import { fetchJobs, fetchJobsCache, updateEndAndStart, updateJobsVisible, 
    updatePage, updateEndJobs, jobsCacheChanged, updadeValueExpectedCache, clearJobsCache, clearJobsVisible } from '../redux/actions'
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
        const { jobsVisible, jobsCache, page, valueExpectedCache, allJobs, updateEndJobs, updatePage, updateJobsVisible, 
            updateEndAndStart, fetchJobsCache, updadeValueExpectedCache } = this.props
        
        if (allJobs) {
            if (jobsCache.length === valueExpectedCache) {
                updadeValueExpectedCache()
                fetchJobsCache(page)
                updatePage()
            }
            if (jobsCache.length !== valueExpectedCache) updateEndJobs()
        } else {
            if (jobsVisible.length < jobsCache.length) {
                if (jobsCache.length === valueExpectedCache) {
                    updadeValueExpectedCache()
                    fetchJobsCache(page)
                    updatePage()
                }
                updateJobsVisible(jobsCache)
                updateEndAndStart()
                if ( jobsVisible.length + 9 > jobsCache.length ) updateEndJobs()
            }
        }
    }

    componentDidUpdate(){
        const { fetchJobsCache, jobsCache, allJobs, page } = this.props
        if (allJobs && jobsCache.length === 0){
            fetchJobsCache(page)
        }
    }

    componentDidMount() {
        const { page, fetchJobs, fetchJobsCache } = this.props
        fetchJobs(page)
        fetchJobsCache(page)
        updatePage()
    }

    render(){
        const { jobsVisible, jobsCache, endJobs, allJobs, valueExpectedCache} = this.props
        
        return (
            <React.StrictMode>
                <h2 className="Title-feed">Newly Added Jobs</h2>
                <div className="App-JobOpportunity-container">
                    {!allJobs && jobsVisible.map((job: TJobCard, index: number) => 
                        <JobCard company={job.company} created_at={job.created_at} location={job.location} 
                        title={job.title} type={job.type} key={index}/>)}
                    {allJobs && jobsCache.map((job: TJobCard, index: number) => 
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
    valueExpectedCache: state.githubjobs.valueExpectedCache
})
const mapDispatchToProps = (dispatch: any) => 
    bindActionCreators({ fetchJobs, fetchJobsCache, updateEndAndStart, clearJobsCache, clearJobsVisible,
        updateJobsVisible, updatePage, updateEndJobs, jobsCacheChanged, updadeValueExpectedCache}, dispatch)
const connector = connect(mapStateToProps, mapDispatchToProps)

export default connector(Feed)