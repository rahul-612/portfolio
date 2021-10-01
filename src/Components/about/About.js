import React, { createContext } from 'react'
import './about.css'
import './about_res.css';
import skillData from './skillData';
import Skill from './Skill'
import '../utility/observer.js'
import useOnScreen from '../utility/observer'
import isActive from '../utility/isActive'




export const About = () => { 
    const [setRef,visible]=useOnScreen({threshold:0,triggerOnce:true}); 
    
    
    return (
        <section id="about" className="about">
           
            <h1 className={visible?"heading_about appear fade-in h_ani":"heading_about fade-in"} ref={setRef}>About{visible?isActive(visible,'aboutNavItem'):null}</h1>

            <div className={visible?"my_section fade-in appear":"fade-in"} ref={setRef}>
           <div className="bio_container">
                <div className="my_img"></div>
                <div className="my_bio flex">
                    <h1 className="flex">Who's this guy<i class="fas fa-question"></i></h1>
                    <p className="flex"> Hi, My name is Rahul Kumar. I have a good knowledge of <span style={{ color: '#3D9970', fontWeight: 'bold' }}>Front-end development</span>.I have serious passion for UI effects, animations and creating intuitive, dynamic user experiences.</p>
                    <a href="#contact" style={{ color: '#3D9970', fontWeight: 'bold' }}>Let's make something special</a>
                </div>
                </div>   
                <div className="skills">
                    {skillData.map((val) => {
                        return <Skill key={val.id} name={val.name} percent={val.percent} visible={visible} set={setRef}/>
                    })}
                
                <div className="qual flex">
                    <h1>Education</h1>
                    <ul>
                        <li><i className="fas  fa-graduation-cap"></i>MCA, 2022 <p>LBSIM(IPU), Delhi</p></li>
                        <li><i className="fas fa-graduation-cap"></i>BCA, 2020 <p>BIT Mesra, Ranchi</p></li>
                    </ul>
                </div>
                </div>
            </div>
            
        </section>
        
    )
}


export default About;