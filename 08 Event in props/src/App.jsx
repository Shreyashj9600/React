import './App.css'
import EventHandeling from './components/EventHandeling'
import EventProps from './components/EventProps'
import Netflix from './components/Netflix'
import './components/Netflix.module.css'

function App() {

  return (
    <>
      {/* <h1 className='heading'>Netflix</h1> */}
      {/* {<Netflix  />}  // Netflix card */}

      {/* <EventHandeling /> // Event Handeling in 1 */}

      {<EventProps /> /* // how to pass events in prpos */}
    </>
  )
}

export default App
