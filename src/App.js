import React from 'react'
import './App.css';
import About from './Components/about/About';
import Contact from './Components/contact/Contact';
import Footer from './Components/footer/Footer';
import Home from './Components/home/Home';
import Navbar from './Components/navbar/Navbar'
import Portfolio from './Components/portfolio/Portfolio';


export const App = () => {
  return (
    <>
      <Home/>  
      <Navbar/>
      <About/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App;