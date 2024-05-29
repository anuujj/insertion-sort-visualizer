import { useState } from 'react'
import './App.css'
import Graph from './Graph'

function App() {
  const arr=[83, 6, 63, 84, 9, 14, 90, 24, 17]
  return (
    <>
      <h1>Insertion Sort</h1>
      <Graph arr={arr}/>
    </>
  )
}

export default App
