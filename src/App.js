import React from 'react'
import { Navbar, Products } from './components'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { CssBaseline } from '@material-ui/core'

const App = () => {
  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <CssBaseline />
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Products />}/>
        </Routes>
      </div>
    </Router>
  )
}

export default App