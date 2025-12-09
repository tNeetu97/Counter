import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div> 
          <img src={reactLogo} className="logo react" alt="React logo" />
      </div>
      <h1 style={{color:'green'}}>Counter</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          <h1>{count}</h1>  
        </button>
        </div>
      
    </>
  )
}

export default App
