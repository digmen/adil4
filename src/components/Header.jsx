import React from 'react'

import './header.css'

import logo from './images/logo.svg'

export default function Header() {
    return (
        <div className='header'>
            <div className='header_logo'>
                <img className='header_logo_img' src={logo} alt='logo' />
            </div>
            <div className='header_nav'>
                <ul className='header_nav_list'>
                    <li className='herder_nav_list_item'>
                        <a href='#home'>Home</a>
                    </li>
                    <li className='herder_nav_list_item'>
                        <a href='#aboutus'>About Us</a>
                    </li>
                    <li className='herder_nav_list_item'>
                        <a href='#products'>Products</a>
                    </li>
                    <li className='herder_nav_list_item'>
                        <a href='#service'>Service</a>
                    </li>
                    <li className='herder_nav_list_item'>
                        <a href='#contact'>Contact Us</a>
                    </li>
                </ul>
            </div>
            <div className='header_btn'>
                <a href='#'>Order now</a>
            </div>
        </div>
    )
}
