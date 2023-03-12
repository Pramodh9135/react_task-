import React from 'react'
import Display from './Display'
import JSON from "./detail.json"
import "./global.css"

const App = () => {
  return (
    <div>
      <Display data={JSON}/>
    </div>
  )
}

export default App  