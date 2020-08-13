import React, { useState } from 'react'
import Header from './components/Header'
import Search from './components/Search'
import Feed from './components/Feed'
import Footer from './components/Footer'
import './App.css'

function App() {

  const [allJobs, setAllJobs] =  useState<boolean>(false)

  return (
    <React.StrictMode>
      <div className="App">
        <Header setAllJobs={setAllJobs} allJobs={allJobs}/>
        <Search setAllJobs={setAllJobs}/>
        <Feed setAllJobs={setAllJobs} allJobs={allJobs}/>
        <Footer />
      </div>
    </React.StrictMode>
  )
}

export default App