import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AppRoutes from './AppRoutes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h3>Select Your Game & Play</h3>
      <AppRoutes />
    </>
  )
}

export default App
