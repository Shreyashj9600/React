import NetfliexSeries from './components/NetfliexSeries ';
import './index.css'

function App() {
  return (
    <section className='container'>
    <h1 style={{textAlign:'center', marginBottom:'50px'}}>List of best Netfliex Series</h1>
      <NetfliexSeries />
    </section>
  )
}

export default App;