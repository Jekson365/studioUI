import React from 'react'
import { useState } from 'react'
import { FaBars, FaInstagram } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'



const LOGO = 'https://assets.website-files.com/634d6064d1c6401d462f6757/635bca581cfdc01f723c4b0f_logo-white.png'

export const Navbar = () => {
    const [active,setActive] = useState(true)
    return (
        <>
            <div className="header-cover">
                <header className='d-flex align-items-center justify-content-between'>
                    <img id="logo" src={LOGO} />
                    <nav className={`d-flex align-items-center sxs ${active ? 'active-bar' : 'deactive-bar'}`}>
                        <li className='txt-bar'>
                            <a href="">Work</a>
                        </li>
                        <li className='txt-bar'>
                            <a href="">Service</a>
                        </li>
                        <li className='txt-bar'>
                            <a href="">About</a>
                        </li>
                        <li className='icon-bar'>
                            <FaInstagram />
                        </li>
                        <li className='icon-bar'>
                            <FaTwitter />
                        </li>
                        <li className='icon-bar'>
                            <FaFacebook />
                        </li>
                        <li className='icon-bar'>
                            <FaLinkedin />
                        </li>
                    </nav>
                    <div id="toggler" onClick={()=>setActive(!active)}>
                        <FaBars/>
                    </div>
                </header>
            </div>
        </>
    )
}
