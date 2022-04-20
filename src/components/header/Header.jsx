import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'

function Header() {
    return (
        <header>
            <div className="container header_container">
                <h5>Hello I'm</h5>
                <h1>Rohan Kumar</h1>
                <h5 className="text-light">Frontend developer</h5>
                <CTA />
                <HeaderSocials />
                <div className="me">
                    <img src={ME} alt="" />
                </div>

                <a className="scroll_down">
                    Scroll Down
                </a>
            </div>
        </header>
    )
}

export default Header