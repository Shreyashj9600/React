import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

const Siblings = () => {
  console.log('this is a siblings ');

  return (
    <>
      <h1>This is a Siblings</h1>
    </>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Siblings />
  </StrictMode>,
)


