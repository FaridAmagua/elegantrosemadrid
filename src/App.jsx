import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from "./pages/Home"
import Navbar from './pages/Navba'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Navbar /> 
             <div className='min-h-screen pt-16'> {/* Ajusta el padding-top según la altura de tu navbar */}
        <Home />
      </div>
    </>
  )
}

export default App
