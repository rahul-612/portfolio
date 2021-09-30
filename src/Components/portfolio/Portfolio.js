import React from 'react'
import './portfolio.css';
import './portfolio_res.css';
import Project from './Project';
import '../utility/observer.js'
import useOnScreen from '../utility/observer'
import isActive from '../utility/isActive';

export const Portfolio = () => {
    const [setRef,visible]=useOnScreen({threshold:0.2,triggerOnce:true});
 
    return (
        <>
        <section id='portfolio' className='portfolio flex' >
            <h1 className={visible?"port_head appear fade-in h_ani":"port_head fade-in"} ref={setRef}>Projects {visible?isActive(visible,'portfolioNavItem'):null}
            </h1>
            <div className={visible?"projects appear fade-in":"projects fade-in"} ref={setRef}>
                <Project/>
            </div>
        </section>
        </>
    )
}

export default Portfolio;
