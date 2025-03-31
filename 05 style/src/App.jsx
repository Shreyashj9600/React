import { useState, version } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Practice from './Practice'
import Netflix from './components/Netflix'

function App() {

  return (
    <>
    <h1 className='heading'>Netflix</h1>
      {<Netflix  />}
    </>
  )
}

export default App
