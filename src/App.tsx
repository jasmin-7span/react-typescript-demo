import React, { useState } from 'react'
import './App.css'

function App() {
  const [first, setFirst] = useState<string>('typescript')

  return (
    <>
      <h1>Vite + React + {first}</h1>
      <div className="card">
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
