import React from 'react'
import { TPropsHeader } from '../types/types'
import './Header.css'
export default (props: TPropsHeader) => {
    return (
        <header id="header" className="App-header">
            <nav className="App-nav">
                <h2 id="logo">
                    <a href="/">GitHub <span>Jobs</span> </a>
                </h2>
                <ul>
                    <li>
                         <a onClick={() => props.allJobs ? "" : props.setAllJobs(true)}>All jobs</a>
                    </li>
                    <li>
                        <a href="/">Post a job</a>
                    </li>
                    <li>
                        <a href="/">How it Works</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}