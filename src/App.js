import React from 'react'
import { Navbar, Products, Cart, Checkout } from './components'
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
          <Route path='/cart' element={<Cart />}/>
          <Route exact path='/checkout' element={<Checkout />}/>
        </Routes>
      </div>
    </Router>
  )
}

export default App