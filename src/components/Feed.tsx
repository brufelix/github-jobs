import React from 'react'
import './Feed.css'
import JobCard from './JobCard'

export default () => {
    return(
        <React.StrictMode>
            <div className="App-JobOpportunity-container">
                <JobCard fullTime={true}  location="Rio De Janeiro" nameComporation="Insigth lab" 
                    requirements="JS/TS, MongoDB, Knex, ReactJS, Git" time={3} 
                    title="Desenvolvedor Frontend Junior"/>
                <JobCard fullTime={false}  location="Rio De Janeiro" nameComporation="Insigth lab" 
                    requirements="JS/TS, MongoDB, Knex" time={3} 
                    title="Java and Python Engineering Opportunities!"/>
                <JobCard fullTime={false}  location="Rio De Janeiro" nameComporation="Insigth lab" 
                    requirements="JS/TS, MongoDB, Knex, ReactJS, Git, JS/TS, MongoDB, Knex, ReactJS, Git" 
                    time={3}  title="Technical Infrastructure Implementation Healthcare Project Manager"/>
                <JobCard fullTime={true}  location="Rio De Janeiro" nameComporation="Insigth lab" 
                    requirements="JS/TS, MongoDB, Knex, ReactJS, Git" time={3} title="Dev Junior"/>
            </div>
            <div className="div-pagination">
                <button id="button-pagination">More Awesome Jobs</button>
            </div>
        </React.StrictMode>
    )
}