import React from 'react'
import './footer.css'
import { assets } from '../../assets/assets'

const footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    <img src={assets.logo} alt="" />
                    <p>MealMover is your ultimate destination for delicious meals delivered right to your doorstep. Discover a wide range of culinary delights crafted with the finest ingredients and delivered with care. Whether you're craving comfort food classics or exploring new flavors, MealMover has something for everyone.</p>
                    <div className="footer-social-icons">
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                    </div>
                </div>
                <div className="footer-content-center">
                    <h2>Company</h2>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div className="footer-content-right">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>+1-411-767-4533</li>
                        <li>contact@mealmover.com</li>
                    </ul>
                </div>
            </div>
            <hr/>
            <p className="footer-copyright">
                Copyright 2024 © MealMover.com - All Right Reserved.
            </p>
        </div>
    )
}

export default footer
