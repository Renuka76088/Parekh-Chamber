import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import LandingPage from './Components/LandingPage'
import AboutUs from './Pages/AboutUs'
import CircularsPage from './Pages/CircularsPage'
import BlogPage from './Pages/BlogPage'
import ContactPage from './Pages/ContactPage'
import Gallery from './Pages/Gallery'
import Home2 from './Home/Home2'
import Home3 from './Home3/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/home-2' element={<Home2/>}/>
      <Route path='/home-3' element={<Home3/>}/>
      <Route path='/about' element={<AboutUs/>}/>
      <Route path='/circular' element={<CircularsPage/>}/>
      <Route path='/blog' element={<BlogPage/>}/>
      <Route path='/contact' element={<ContactPage/>}/>
      <Route path='/gallery' element={<Gallery/>}/>
    </Routes>
    
    </BrowserRouter>

    </>
  )
}

export default App
