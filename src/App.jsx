import { useState } from 'react'
import { Navbar } from './components/Navbar'

// styles
import './main.scss'
import { FirstRow } from './rows/FirstRow'

function App() {
  return (
    <>
      <Navbar/>
      <FirstRow/>
    </>
  )
}

export default App
