import { useState } from 'react'
import { Navbar } from './components/Navbar'

// styles
import './main.scss'
import { FirstRow } from './rows/FirstRow'
import { FourthRow } from './rows/FourthRow'
import { SecondRow } from './rows/SecondRow'
import { ThirdRow } from './rows/ThirdRow'

function App() {
  return (
    <>
    <div className="lines">
      <div className="line"></div>
      <div className="line"></div>
      <div className="line"></div>
      <div className="line"></div>
    </div>
      <Navbar/>
      <FirstRow/>
      <SecondRow/>
      <ThirdRow/>
      <FourthRow/>
    </>
  )
}

export default App
