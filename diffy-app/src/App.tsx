import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import DiffDate from "./components/DiffDate"
import { getQueryString } from './utils'
import strings from './strings'

function App() {
  const [startDate, endDate] = getQueryString(["startDate", "endDate"])

  return (
    <div className="App">
      <header className="App-header">
        <h1>{strings.appTitle}</h1>
      </header>
      <main>
        {startDate && endDate &&
          <DiffDate startDate={startDate} endDate={endDate} />}
      </main>
    </div>
  )
}

export default App
