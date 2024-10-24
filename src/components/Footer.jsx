import React from 'react'

import './footer.css'
import logo from './images/logowhite.svg'
import arrowUp from './images/arrowup.svg'

export default function Footer() {
    return (
        <footer className='footer'>
            <div className='footer_up'>
                <div className='footer_up_left'>
                    <div className='footer_logo'>
                        <img src={logo} alt='logo' />
                    </div>
                    <div className='footer_loc'>
                        <span>125 M2 WAREHOUSE Q4-193, SAIF ZONE, SHARJAH, U.A.E</span>
                        <div className='footer_number_email'>
                            <a href='tel:+971559876543'>+971 55 987 6543</a>
                            <a href='mailto:turboresourcesme@gmail.com'>turboresourcesme@gmail.com</a>
                        </div>
                    </div>
                </div>
                <div className='footer_up_right'>
                    <div className='footer_nav'>
                        <a href='#home'>Home</a>
                        <a href='#aboutus'>About Us</a>
                        <a href='#products'>Products</a>
                        <a href='#contact'>Contacts</a>
                        <a href='#service'>Service</a>
                    </div>
                    <div className='footer_btn'>
                        <a href='#'>
                            <img src={arrowUp} alt='arrow' />
                        </a>
                    </div>
                </div>
            </div>
            <div className='footer_down'>
                <span>© 2020 Lift media. All rights reserved.</span>
            </div>
        </footer>
    )
}
