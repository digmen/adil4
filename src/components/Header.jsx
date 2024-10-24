import React, { useEffect } from 'react'

import './header.css'

import logo from './images/logo.svg'

export default function Header() {

    useEffect(() => {
        const headerNav = document.querySelector('.header_nav_list')
        const headerBtn = document.querySelector('.header_btn')
        const headerExtra = document.querySelector('.header_logo')

        const stickyClassNav = 'sticky_nav'
        const stickyClassBtn = 'sticky_btn'
        const stickyClassExtra = 'sticky_logo'

        const stickyOffsetNav = headerNav.offsetTop
        const stickyOffsetBtn = headerBtn.offsetTop
        const stickyOffsetExtra = headerExtra.offsetTop

        const handleScroll = () => {
            // Логика для навигации
            if (window.pageYOffset > stickyOffsetNav) {
                headerNav.classList.add(stickyClassNav)
            } else {
                headerNav.classList.remove(stickyClassNav)
            }

            // Логика для кнопки
            if (window.pageYOffset > stickyOffsetBtn) {
                headerBtn.classList.add(stickyClassBtn)
            } else {
                headerBtn.classList.remove(stickyClassBtn)
            }

            // Логика для дополнительного блока
            if (window.pageYOffset > stickyOffsetExtra) {
                headerExtra.classList.add(stickyClassExtra)
            } else {
                headerExtra.classList.remove(stickyClassExtra)
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <div className='header'>
            <div className='header_logo' >
                <img className='header_logo_img' src={logo} alt='logo' />
            </div>
            <div className='header_nav'>
                <ul className='header_nav_list'>
                    <li className='herder_nav_list_item'>
                        <a href='#'>Home</a>
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
