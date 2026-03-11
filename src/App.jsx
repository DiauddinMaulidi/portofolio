import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import About from './Components/About'
import Services from './Components/Services'
import MyWork from './Components/MyWork'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import { BackgroundBeams } from './Components/ui/beams'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './Components/pages/Dashboard'
import Experience from './Components/pages/Experience'
import Project from './Components/pages/Project'
import Paper from './Components/pages/Paper'
import Result from './Components/pages/Result'
import NotFound from './Components/NotFound'
import Certificate from './Components/pages/Certificate'

const App = () => {
  return (
    <BrowserRouter>
      <BackgroundBeams className="fixed inset-0 -z-10" />
      <div className="relative z-10">
      <Routes>
        <Route path='/' element={
          <>
            <Navbar />
            <Hero />
            <About />
            <Services />
            <MyWork />
            <Contact />
            <Footer />
          </>
        } />
        <Route path='/dashboard' element={<Dashboard />}>
          <Route path='/dashboard' element={<Project />} />
          <Route path='/dashboard/experience' element={<Experience />} />
          <Route path='/dashboard/paper' element={<Paper />} />
          <Route path='/dashboard/certificate' element={<Certificate />} />
        </Route>
        
        <Route path='/dashboard/result/:slug' element={<Result />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      </div>

    </BrowserRouter>
  )
}

export default App
