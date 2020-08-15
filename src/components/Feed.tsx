import React, {Component} from 'react'
import { bindActionCreators } from 'redux'
import { connect, ConnectedProps } from 'react-redux'
import Search from './Search'
import { updateEndAndStart, updateJobsVisible, updatePage, updateEndJobs, updadeValueExpectedCache,  searchCache, 
    fetchInitJobs, updateIsSearch} from '../redux/actions'
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
        const { jobsVisible, jobsCache, page, valueExpectedCache, jobDescription, location, end, 
            updateEndJobs,  updateJobsVisible, updateEndAndStart,  updadeValueExpectedCache, searchCache } = this.props
            
        if ( jobsCache.length === valueExpectedCache ) {
            searchCache(page, jobDescription, location)
            updadeValueExpectedCache()
        }
            
        if ( jobsVisible.length < jobsCache.length  ) {
            updateJobsVisible(jobsCache)
            updateEndAndStart()
        }

        if (end > jobsCache.length) {
            updateEndJobs(true)
        }
    }

    componentDidUpdate() {
        const { isSearch, end, jobsCache, updateIsSearch, updateEndJobs } = this.props
        if (isSearch && end < jobsCache.length) {
            updateEndJobs(false)
            updateIsSearch(false)
        }
    }

    componentDidMount() {
        const { isSearch, end, jobsCache, fetchInitJobs, updateEndJobs } = this.props
        if (!isSearch) {
            fetchInitJobs()
        }
        if (end > jobsCache.length) updateEndJobs(true)
    }

    render(){
        const { jobsVisible, endJobs, allJobs } = this.props
        
        return (
            <React.StrictMode>
                <Search/>
                <h2 className="Title-feed">Newly Added Jobs</h2>
                <div className="App-JobOpportunity-container">
                    {!allJobs && jobsVisible.map((job: TJobCard, index: number) => 
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
    bindActionCreators({ updateEndAndStart, updateJobsVisible, updatePage, updateEndJobs, updadeValueExpectedCache, searchCache, 
        fetchInitJobs, updateIsSearch }, dispatch)
const connector = connect(mapStateToProps, mapDispatchToProps)

export default connector(Feed)