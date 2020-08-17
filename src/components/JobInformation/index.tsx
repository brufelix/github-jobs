import React, { useState, useEffect } from 'react'
import { IoMdArrowRoundBack } from 'react-icons/io'
import { TJob } from '../../types/types'
import { BASEURL, headers } from '../../config/config'
import './JobInformation.css'

const initialState = { description: "", title: "", type: "", location: "", howToApply: "" }

export default () => {

    const [job, setJob] = useState(initialState)
    
    useEffect(() => {
        const currentJobId: string | null = localStorage.getItem("currentJobId")   
        if (!job.description.trim()) {
            fetch(`${BASEURL}positions/${currentJobId}`, {headers})
                .then(res => res.json())
                .then((job: TJob) => {
                    const { title, type, location, description, how_to_apply } = job
                    setJob({description, title, type, location, howToApply: how_to_apply})
                })
                .catch(() => setJob({ ...initialState }))
                .catch(() => {throw new Error("Error getting a single job!")})
        }
    }) 

        const { title, location, type, description, howToApply } = job
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
                <div className="column sidebar" >
                    <h4>How to apply</h4>
                    <div className="howToApply"
                        dangerouslySetInnerHTML={{__html: howToApply}}>
                    </div>
                </div>
            </React.StrictMode>
        )
}