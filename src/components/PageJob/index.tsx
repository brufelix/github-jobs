import React, {Component} from 'react'
import { IoMdArrowRoundBack } from 'react-icons/io'
import { TJob, TStateJobPage } from '../../types/types'
import { BASEURL, headers } from '../../config/config'
import './PageJob.css'

const initialState = { description: "", title: "", type: "", location: "" }

class PageJobs extends Component<{}, TStateJobPage> {

    constructor(props: any) {
        super(props)
        this.state = {...initialState}
    }

    componentDidMount() {
        const currentJobId: string | null = localStorage.getItem("currentJobId")   
        fetch(`${BASEURL}positions/${currentJobId}`, {headers})
        .then(res => res.json())
        .then((job: TJob) => {
            const { title, type, location, description } = job
            this.setState({description, title, type, location})
        })
        .catch(() => this.setState({ ...initialState }))
        .catch(() => {throw new Error("Error getting a single job!")})
    }

    render(){
        const { title, location, type, description } = this.state
        return(
            <React.StrictMode>
                <div className="search">
                    <IoMdArrowRoundBack style={{marginRight: "3px", marginLeft: "10px", color: "#005194"}}/>
                    <div className="left">
                        <a className="back" href="/">See all positions</a>
                    </div>
                </div>
                <div id="page">
                    <div className="inner">
                        <p className="supertitle">{`${type} ${location}`}</p>
                        <h1>{`${title}`}</h1>
                        <div className="columns gereric">
                            <div className="column main" dangerouslySetInnerHTML={{__html: description }}>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="column sidebar">
                        <a className="box-apply" href="/">How to apply</a>
                </div>
            </React.StrictMode>
        )
    }
}

export default PageJobs