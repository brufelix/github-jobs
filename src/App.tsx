import React, { useState } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Header from './components/Header'
import Search from './components/Search'
import Feed from './components/Feed'
import Footer from './components/Footer'
import HowItWorks from './components/HowItWorks'
import AllJobs from './components/AllJobs'
import './App.css'

function App() {
  const [allJobs, setAllJobs] =  useState<boolean>(false)
  return (
    <BrowserRouter>
      <div className="App">
        <Header setAllJobs={setAllJobs} allJobs={allJobs}/>
        <Search setAllJobs={setAllJobs} />
          <Switch>
              <Route path="/" exact component={Feed}/>
              <Route path="/positions" component={AllJobs}/>
              <Route path="/faq" component={HowItWorks}/>
              <Redirect from="*" to="/" />
          </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App