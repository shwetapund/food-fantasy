import React from 'react'
import "./Footer.css"
import { assets } from "./../../assets/assets"

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className='footer-content'>
        <div className='footer-content-left'>
            <img src={assets.logo} alt='' />
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam maxime explicabo sit animi beatae inventore cupiditate nisi. Enim iusto veniam modi rem dolores laudantium eos repellendus molestias, quae velit natus?</p>
            <div className='footer-social-icons'>
                <img className='' src={assets.facebook_icon} />
                <img className='' src={assets.twitter_icon} />
                <img className='' src={assets.linkedin_icon} />
            </div>
        </div>
        <div className='footer-content-right'>
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div className='footer-content-center'>
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+1-23-345-3455</li>
                <li>contact@tomato.com</li>
            </ul>
        </div>
        </div>
        <hr/>
        <p className='footer-copyright'>Copyright 2024 @ Tomato.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer