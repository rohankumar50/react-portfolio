import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import { BsBehance } from 'react-icons/bs'
function HeaderSocials() {
    return (
        <div className="header_socials">
            <a href="https://www.linkedin.com/in/rohankumar50/" target='_blank' rel="noreferrer"><BsLinkedin /></a>
            <a href="https://github.com/rohankumar50" target='_blank' rel="noreferrer"><BsGithub /></a>
            <a href="https://www.behance.net/rohankumar10/projects" target='_blank' rel="noreferrer"><BsBehance /></a>
        </div>
    )
}

export default HeaderSocials