import React, {Component} from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { IoMdArrowRoundBack } from 'react-icons/io'

import mapStateToProps from './mapStateToProps'
import mapDispatchToProps from './mapDispatchToProps'
import { TJobCard, TPropsFeed } from '../../types/types'
import JobCard from '../JobCard/'
import './AllJobs.css'

type PropsFromRedux = ConnectedProps<typeof connector>
type Props = PropsFromRedux & TPropsFeed

class Feed extends Component<Props> {
    constructor(props: Props) {
        super(props)
        this.getMoreJobs.bind(this)
    }

    getMoreJobs() {
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
            <>
                <div className="search">
                    <IoMdArrowRoundBack style={{marginRight: "3px", marginLeft: '10px',color: "#005194"}}/>
                    <div className="left">
                        <a className="back" href="/">Back to search</a>
                    </div>
                </div>
                <h2 className="title-feed">All jobs</h2>
                <div className="app-JobOpportunity-container">
                    {jobsVisible.map((job: TJobCard, index: number) => 
                        <JobCard company={job.company} created_at={job.created_at} location={job.location} 
                        title={job.title} type={job.type} key={index} id={job.id} />)}
                </div> 
                <div className="div-pagination">
                    {!endJobs &&
                        <button id="button-pagination" onClick={() => this.getMoreJobs()}>More Awesome Jobs</button>}
                </div>
            </>
        )
    }
}

const connector = connect(mapStateToProps, mapDispatchToProps)

export default connector(Feed)