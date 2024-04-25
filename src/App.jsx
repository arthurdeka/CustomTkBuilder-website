import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header'
import Canvas from './canvas/canvas'

function App() {
  return (
    <div className='App'>
      
      <Header/>
      <Canvas/>
    </div>
  )
}

export default App
