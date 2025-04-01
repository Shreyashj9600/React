import './App.css' 
import Netflix from './components/Netflix'
import './components/Netflix.module.css'

function App() {

  return (
    <>
    <h1 className='heading'>Netflix</h1>
      {<Netflix  />}
    </>
  )
}

export default App
