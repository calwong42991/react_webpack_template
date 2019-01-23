import React, { Component } from 'react'

class App extends Component {
  render () {
    console.log('process.env.VERSION', process.env.VERSION);
    console.log('process.env.PLATFORM', process.env.PLATFORM);
    console.log('process.env.NODE_ENV', process.env.NODE_ENV);
    return (
      <div>
        <img alt="header" src="/dist/images/header.jpg" className="app-header" />
        <h1> React Application</h1>
      </div>
    )
  }
}

export default App;