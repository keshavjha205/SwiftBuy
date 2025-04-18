import React from 'react'
import Header from './components/Header'
import { BrowserRouter } from 'react-router'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </div>
  )
}

export default App