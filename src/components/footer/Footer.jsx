import React from 'react'
import './footer.css'
import { FaFacebookF } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'
import { IoLogoTwitter } from 'react-icons/io'

function Footer() {
    return (
        <footer>
            <div className="footer_logo">GFX Creator</div>
            <div className="permalinks">
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#portifolio">Portfolio</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
                <li><a href="#contact">Contact</a></li>
            </div>
            <div className="footer_socials">
                <a href="https://facebook.com"><FaFacebookF /></a>
                <a href="https://instagram.com"><FiInstagram /></a>
                <a href="https://twitter.com"><IoLogoTwitter /></a>
            </div>

            <div className="footer_copyright">
                <small>&copy; GFX Creator. All rights reserved</small>
            </div>
        </footer>
    )
}

export default Footer 