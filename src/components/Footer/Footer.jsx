import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    <div className='logo-display'>
                        <a href="#navbar"><img className='logo' src={assets.logo} alt="" /></a>
                    </div>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus porro dolore, dicta maxime vitae laborum sit adipisci suscipit at fuga, veniam molestias, assumenda sequi iusto alias incidunt repudiandae animi nesciunt.</p>
                    <div className="footer-social-icons">
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                    </div>
                </div>
                <div className="footer-content-center">
                    <h2>COMPANY</h2>
                    <ul>
                        <a href="#navbar"><li>Home</li></a>
                        <a href="#navbar"><li>About us</li></a>
                        <a href="#"><li>Delivery</li></a>
                        <a href="#"><li>Privacy policy</li></a>
                    </ul>
                </div>
                <div className='footer-content-right'>
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>+91-123456789</li>
                        <li>contact@flavorify.com</li>
                    </ul>
                </div>
            </div>
            <hr />
            <p className="footer-copyright">
                Copyright 2024 &copy; Flavorify.com - All Right Reserved
            </p>
        </div>
    )
}

export default Footer