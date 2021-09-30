import React from 'react'
import './home.css';
import './home_res.css';
import '../utility/observer.js'
import useOnScreen from '../utility/observer'
import '../utility/isActive';
import isActive from '../utility/isActive';

// const ani=()=>{
//     let heading=document.querySelectorAll('.heading_about')[0];
//     heading.classList.add('h_ani')
//     heading.classList.remove('display');
//     // console.log(temp);

//     let my_img=document.querySelectorAll('.my_img')[0];
//     // console.log(my_img)
//     my_img.classList.add('img_ani');
    
//     let my_skill=document.querySelectorAll('.skills')[0];
//     my_skill.classList.add('skill_ani');
//     setTimeout(()=>{
//         my_img.classList.remove('display');
//         my_skill.classList.remove('display');
//     },800)

//     let fill_bar=document.querySelectorAll('.fill');
//     // console.log(fill_bar);

//     setTimeout(()=>{
//         fill_bar.forEach((elem)=>{
//             elem.classList.add('fill_bar_ani');
//             elem.classList.remove('display');
//             elem.childNodes[0].classList.remove('display');
//         })
//     },800)
// }
    




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


