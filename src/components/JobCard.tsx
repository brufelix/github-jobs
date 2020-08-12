import React from 'react'
import {TJobCard} from '../types/types'
import './JobCard.css'

export default (props: TJobCard) => {
    return (
        <div className="Box-JobCard">
            <div className="title">{props.title}</div>
            <div className="Subtitle-Times">
                <div className="time">{`${props.create_at}`}</div>
                <div className="full-time">{props.type}</div>
            </div>
            <div className="location">{props.location}</div>
            <div id="requirements">NodeJs, ReactJs, Css</div>
            <div id="nameComporation">{props.company}</div>
            <button id="apply-button">Apply Now</button>
        </div>
    )
}