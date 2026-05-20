import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import HomePage from './Landing_Page/home/HomePage'
import PricingPage from './Landing_Page/pricing/PricingPage'
import AboutPage from './Landing_Page/about/AboutHome'
import ProductPage from './Landing_Page/products/ProductPage'
import SupportPage from './Landing_Page/support/SupportPage'
import NotFound from './Landing_Page/NotFound'
import Signup from './Landing_Page/signup/Signup'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Landing_Page/Navbar'
import Footer from './Landing_Page/Footer'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Navbar />
      <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/pricing" element={<PricingPage/>} />
      <Route path="/about" element={<AboutPage/>} />
      <Route path="/product" element={<ProductPage/>} />
      <Route path="/support" element={<SupportPage />} />
      <Route path="*" element={<NotFound/>} />
      <Route path="/signup" element={<Signup/>} />
    </Routes>
    <Footer />
    </BrowserRouter>,
)
