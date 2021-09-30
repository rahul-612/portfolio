import React from 'react'
import './footer.css';
const Footer = () => {
    return (
        <>
            <footer className="flex">
                <div className="foot_link_container flex">
                <a className="foot_link" href="#" target="_blank">
                    <i className="fab fa-2x fa-linkedin"></i>
                </a>
                <a className="foot_link" href="https://github.com/rahul-612" target="_blank">
                    <i className="fab fa-2x fa-github"></i>
                </a>
                <a className="foot_link" href="https://www.instagram.com/blessed_612/" target="_blank">
                <i className="fab fa-2x fa-instagram"></i>
                </a>
                <a className="foot_link" href="https://www.facebook.com/Rk785164" target="_blank">
                    <i className="fab fa-2x fa-facebook"></i>
                </a>
                <a className="foot_link" href="#" target="_blank">
                    <i className="fab fa-2x fa-twitter"></i>
                </a>
                </div>
                <div className="copy"><p>Rahul Kumar <span>Ⓒ 2021</span></p></div>
            </footer>
        </>
    )
}

export default Footer
