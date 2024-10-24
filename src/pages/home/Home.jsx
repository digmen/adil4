import React from 'react'

import './home.css'

import arrow from './images/arrowvector.svg'
import AboutUs from '../aboutus/AboutUs'
import Product from '../product/Product'
import Service from '../service/Service'
import Contact from '../contact/Contact'

export default function Home() {
    return (
        <div >
            <main className='hero' id='home'>
                <div className='hero_text'>
                    <div className='hero_text_first_block'>
                        <h1>TURBO RESOURCES<br /> MIDDLE EAST</h1>
                        <span>Welcome to TURBO RESOURCES MIDDLE EAS – Plumbing Professionals!</span>
                    </div>
                    <div className='hero_text_second_mobile_block'>
                        <div className='hero_text_second_block'>
                            <a href='#contact'>Contact Us</a>
                            <p>We offer high-quality plumbing equipment and professional services for home and business. Our mission is to provide reliable solutions that make your life more comfortable and safer. Explore our product catalog, find out about our services and contact us for advice. We are happy to help you with your choice!</p>
                        </div>
                        <div className='hero_third_mobile'>
                            <div className='hero_third_block_mobile'>
                                <h3>1mill</h3>
                                <span>Active users</span>
                            </div>
                            <div className='hero_third_block_mobile'>
                                <h3>80k+</h3>
                                <span>Glad clients</span>
                            </div>
                            <div className='hero_third_block_mobile'>
                                <h3>30k+</h3>
                                <span>Partners</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='hero_arrow_block'>
                    <img src={arrow} alt='arrow' />
                    <div className='hero_arrow_block_blocks'>
                        <div className='blocks1'></div>
                        <div className='blocks2'></div>
                        <div className='blocks3'></div>
                        <div className='blocks4'></div>
                        <div className='blocks5'></div>
                    </div>
                </div>
                <div className='hero_third'>
                    <div className='hero_third_block'>
                        <h3>1mill</h3>
                        <span>Active users</span>
                    </div>
                    <div className='hero_third_block'>
                        <h3>80k+</h3>
                        <span>Glad clients</span>
                    </div>
                    <div className='hero_third_block'>
                        <h3>30k+</h3>
                        <span>Partners</span>
                    </div>
                </div>
            </main>
            <AboutUs />
            <Product />
            <Service />
            <Contact />
        </div>
    )
}
