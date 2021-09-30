import React, { useState } from 'react'
import "./contact.css"
import '../utility/observer.js'
import useOnScreen from '../utility/observer'
import isActive from '../utility/isActive';


const contact = () => {
    const [setRef,visible]=useOnScreen({threshold:0.2,triggerOnce:true});
    const [fdata,setFdata]=useState({
        name:"",
        email:"",
        message:""
    });

    const inputEvent=(event)=>{
        const {name,value}=event.target;
        setFdata((preVal)=>{
            return{
                ...preVal,
                [name]:value
            }
        })
    }
    const onSubmit=(event)=>{
        event.preventDefault();
        alert(`${fdata.name} ${fdata.email} ${fdata.email}`);

        setFdata({
            name:"",
            email:"",
            message:""
        })
    }


    return (
        <>
            <section id="contact">
                <div className="custom-shape-divider-top-1632563289">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M1200 0L0 0 598.97 114.72 1200 0z" className="shape-fill"></path>
                    </svg>
                </div>
                <div className={visible?"contact_head h_ani appear fade-in":"contact_head fade-in"} ref={setRef}>contact {visible?isActive(visible,'contactNavItem'):null}</div>

                <div className={visible?"contact_box appear fade-in":"contact_box fade-in"} ref={setRef}>
                    <form action="" action='' onSubmit={onSubmit}>
                        <div className="inputBox">
                            <input type="text" name='name' autoComplete="off" value={fdata.name} onChange={inputEvent} required />
                            <label htmlFor="name">name</label>
                        </div>

                        <div className="inputBox">
                            <input type="email" name='email' autoComplete="off" value={fdata.email} onChange={inputEvent} required />
                            <label htmlFor="email">email</label>
                        </div>
                        <div className="inputBox">
                            <textarea name="message"  cols="71" rows="8" value={fdata.message} onChange={inputEvent} autoComplete="off" required></textarea>
                            <label htmlFor="message">message</label>
                        </div>
                        <input type="submit" name="" value="Submit"/>
                    </form>
                </div>
            </section>
        </>
    )
}

export default contact;
