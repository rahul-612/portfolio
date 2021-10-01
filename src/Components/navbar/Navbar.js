import React, { useState,useContext } from 'react'
import './navbar.css'
import './navbar_res.css'
// import useOnScreen from '../about/observer';



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


// const hamburger=document.querySelector('.hamburger');
// console.log(hamburger)
// const navMenu = document.querySelector(".nav-menu");
// if(hamburger){
//   hamburger.addEventListener("click", mobileMenu);
// }

function mobileMenu(e) {
  const navMenu = document.querySelector(".nav-menu");
  e.target.classList.toggle("active");
  navMenu.classList.toggle("active");
  
  const homeHead=document.querySelector('.heading');
    homeHead.classList.toggle('fade-in');
  // console.log(homeHead)
}

// Add active class to the current button (highlight it)

// var btns = document.getElementsByClassName("btn");
// console.log(btns)
// for (var i = 0; i < btns.length; i++) {
//   btns[i].addEventListener("click", function() {
//   var current = document.getElementsByClassName("active");
//   if (current.length > 0) { 
//     current[0].className = current[0].className.replace(" active", "");
//   }
//   this.className += " active";
//   });
// }



export default Navbar;
