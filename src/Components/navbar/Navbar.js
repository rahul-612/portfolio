import React, { useState,useContext } from 'react'
import './navbar.css'
import './navbar_res.css'


export const Navbar = () => {

    return (
        <>
        <nav id='navbar'>
            <ul className="nav-menu">
                <li className="nav-item"><a href="#home" className="navBtn homeNavItem" onClick={active}>Home</a></li>
                <li  className="nav-item"><a href="#about" className="navBtn aboutNavItem" onClick={active}>About</a></li>
                <li className="nav-item"><a href="#portfolio" className="navBtn portfolioNavItem" onClick={active}>Portfolio</a></li>
                <li className="nav-item"><a href="#contact" className="navBtn contactNavItem" onClick={active}>Contact</a></li>            
            </ul>
            <div className="hamburger" onClick={mobileMenu}>
                <span className="h_bar"></span>
                <span className="h_bar"></span>
                <span className="h_bar"></span>
            </div>
        <div className="nav_bottom_border"></div>
        </nav>
        </>
    )
}


function active(e){
  // console.log(e);
  let btns = document.querySelectorAll(".navBtn");
  btns.forEach((elem)=>{
    elem.classList.remove('active');
  })
  if(e.target.className==='active')
  {
  }
  else
  {
    e.target.classList.add('active');
  }
}


function mobileMenu(e) {
  const navMenu = document.querySelector(".nav-menu");
  e.target.classList.toggle("active");
  navMenu.classList.toggle("active");
  
  const homeHead=document.querySelector('.heading');
    homeHead.classList.toggle('fade-in');
  // console.log(homeHead)
}



export default Navbar;