import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AppRoutes from './AppRoutes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
       
      <h1>Select you Game & Play</h1>
      <AppRoutes />
      </div>
    </>
  )
}

export default App
