import React, { useState } from 'react'
import './nav.css'
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai'
import { BiBook } from 'react-icons/bi'
import { RiServiceLine } from 'react-icons/ri'
import { BiMessageSquareDetail } from 'react-icons/bi'

function Nav() {
    const [activeClass, setActiveClass] = useState('#');
    return (
        <nav>
            <a href="#" onClick={() => setActiveClass('#')} className={activeClass === '#' ? 'active' : ''}><AiOutlineHome /></a>
            <a href="#about" onClick={() => setActiveClass('#about')} className={activeClass === '#about' ? 'active' : ''}><AiOutlineUser /></a>
            <a href="#experience" onClick={() => setActiveClass('#experience')} className={activeClass === '#experience' ? 'active' : ''}><BiBook /></a>
            <a href="#services" onClick={() => setActiveClass('#services')} className={activeClass === '#services' ? 'active' : ''}><RiServiceLine /></a>
            <a href="#contact" onClick={() => setActiveClass('#contact')} className={activeClass === '#contact' ? 'active' : ''}><BiMessageSquareDetail /></a>
        </nav>
    )
}

export default Nav