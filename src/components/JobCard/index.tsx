import React from 'react'
import {TJobCard} from '../../types/types'
import './JobCard.css'

export default (props: TJobCard) => {
    const handleClickSeeJob = () => {
        localStorage.setItem("currentJobId", props.id)
    }
    
    return (
        <div className="box-JobCard">
            <div className="title">{props.title}</div>
            <div className="created-at-Type">
                <div className="created-at">{`${props.created_at}`}</div>
                <div className="type">{props.type}</div>
            </div>
            <div className="location">{props.location}</div>
            <div id="company">{props.company}</div>
            <button id="see-button" onClick={() => handleClickSeeJob()}>
                <a id="see-a" href="/job" >See Job</a>
            </button>
        </div>
    )
}