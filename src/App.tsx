import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Header from './components/Header/'
import Feed from './components/Feed/'
import AllJobs from './components/AllJobs/'
import HowItWorks from './components/HowItWorks/'
import Footer from './components/Footer/'
import PageJob from './components/JobInformation/'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
          <Switch>
              <Route path="/" exact component={Feed}/>
              <Route path="/positions" component={AllJobs}/>
              <Route path="/faq" component={HowItWorks}/>
              <Route path="/job" component={PageJob}/>
              <Redirect from="*" to="/" />
          </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App