import React from 'react'
import Header from './components/Header'
import Search from './components/Search'
import Feed from './components/Feed'
import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <Search/>
      <Feed/>
    </div>
  )
}

export default App