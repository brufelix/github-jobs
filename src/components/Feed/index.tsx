import React, {Component} from 'react'
import { connect, ConnectedProps } from 'react-redux'
import Search from '../Search/'

import mapStateToProps from './mapStateToProps'
import mapDispatchToProps from './mapDispatchToProps'
import { TJobCard, TPropsFeed } from '../../types/types'
import JobCard from '../JobCard/'
import './Feed.css'

type PropsFromRedux = ConnectedProps<typeof connector>
type Props = PropsFromRedux & TPropsFeed

class Feed extends Component<Props> {
    constructor(props: Props) {
        super(props)
        this.getMoreJobs.bind(this)
    }

    getMoreJobs() {
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
        const { isSearch, end, jobsCache, updateEndAndStart, 
            updateIsSearch, updateEndJobs, updateJobsVisible } = this.props
        if (isSearch && end < jobsCache.length) {
            updateJobsVisible(jobsCache)
            updateEndAndStart()
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
        const { jobsVisible, endJobs} = this.props
        
        return (
            <React.StrictMode>
                <Search/>
                <h2 className="title-feed">Newly Added Jobs</h2>
                <div className="app-JobOpportunity-container">
                    {jobsVisible.map((job: TJobCard, index: number) => 
                        <JobCard company={job.company} created_at={job.created_at} location={job.location} 
                        title={job.title} type={job.type} key={index} id={job.id} />)}
                </div>
                <div className="div-pagination">
                    {!endJobs &&
                        <button id="button-pagination" onClick={() => this.getMoreJobs()}>More Awesome Jobs</button>}
                </div>
            </React.StrictMode>
        )
    }
}

const connector = connect(mapStateToProps, mapDispatchToProps)

export default connector(Feed)