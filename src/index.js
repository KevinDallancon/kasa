import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home'
import About from './pages/About'
import Logement from './pages/Logement'
import Header from './components/Header'
import Footer from './components/Footer'
import Error404 from './components/Error404'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './styles/main.scss'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/logement" element={<Logement />} />
        <Route path="/*" element={<Error404 />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>,
)
