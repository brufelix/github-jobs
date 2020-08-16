import React from 'react'
import './Header.css'
export default () => {
    return (
        <header id="header" className="App-header">
            <nav className="App-nav">
                <h2 id="logo">
                    <a href="/" >GitHub <span>Jobs</span> </a>
                </h2>
                <ul>
                    <li>
                         <a href="/positions" >All jobs</a>
                    </li>
                    <li>
                        <a href="/" >Post a job</a>
                    </li>
                    <li>
                        <a href="/faq">How it Works</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}