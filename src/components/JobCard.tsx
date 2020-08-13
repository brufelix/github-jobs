import React from 'react'
import {TJobCard} from '../types/types'
import './JobCard.css'

export default (props: TJobCard) => {
    return (
        <div className="Box-JobCard">
            <div className="Title">{props.title}</div>
            <div className="Created-at-Type">
                <div className="Created-at">{`${props.created_at}`}</div>
                <div className="Type">{props.type}</div>
            </div>
            <div className="Location">{props.location}</div>
            <div id="company">{props.company}</div>
            <button id="apply-button">Apply Now</button>
        </div>
    )
}