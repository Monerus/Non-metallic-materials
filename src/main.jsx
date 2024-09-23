import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { Home, Materials, Services } from './pages'
import { Header, Footer } from './components';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
    <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/materials' element={<Materials />} />
        <Route path='/services' element={<Services />} />
      </Routes>
    <Footer />
    </Router>
  </StrictMode>,    
)
