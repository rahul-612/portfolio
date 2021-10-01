import React from 'react'
import './home.css';
import './home_res.css';
import '../utility/observer.js'
import useOnScreen from '../utility/observer'
import '../utility/isActive';
import isActive from '../utility/isActive';


export const Home = () => {
    const [setRef,visible]=useOnScreen({threshold:0.2,triggerOnce:true}); 
    return (
        <>
            <header id="home" className="home">
               <div className="heading" ref={setRef}>
               {visible?isActive(visible,'homeNavItem'):null}
                   <h1>Hello, I am <span>Rahul Kumar</span>.</h1>
                   <h1>I'm a full-stack web developer.</h1>
                   <a href='#about' className="h_btn">view my work    <i className="fas fa-arrow-down"></i><i className="fas fa-arrow-right"></i></a>
               </div>
            </header>
        </>
    )
}

export default Home;