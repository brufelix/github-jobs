import React from 'react'
import Header from './components/Header'
import Search from './components/Search'
import Feed from './components/Feed'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <React.StrictMode>
      <div className="App">
        <Header />
        <Search />
        <Feed />
        <Footer />
      </div>
    </React.StrictMode>
  )
}

export default App