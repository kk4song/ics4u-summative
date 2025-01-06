import React from 'react'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'


const App = () => {
  return (
    <main className = "relative min-h-screen w-screen overflow-x-hidden">
      <h1>
        <Hero/>

        <About/>
      </h1>
    </main>
  )
}

export default App