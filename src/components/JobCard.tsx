import React from 'react'
import {TJobCard} from '../types/types'
import './JobCard.css'

export default (props: TJobCard) => {
    return (
        <div className="Box-JobOpportunity">
            <div className="title">{props.title}</div>
            <div className="Subtitle-Times">
                <div className="time">{`Há ${props.time} Dias`}</div>
                <div className="full-time">{props.fullTime ? "Full Time" : "It's not full time"}</div>
            </div>
            <div className="location">{props.location}</div>
            <div id="requirements">{props.requirements}</div>
            <div id="nameComporation">{props.nameComporation}</div>
            <button id="apply-button">Apply Now</button>
        </div>
    )
}