import React from 'react'

import './about.css'

import aboutImg from './images/rafiki.svg'

export default function AboutUs() {
	return (
		<main className='about' id='aboutus'>
			<div className='about_title'>
				<h1>About <strong>Us</strong></h1>
				<div className='dot'>
					<div className='dot1'></div>
					<div className='dot2'></div>
					<div className='dot3'></div>
					<div className='dot4'></div>
					<div className='dot5'></div>
				</div>
			</div>
			<div className='about_second_block'>
				<div className='about_text_block'>
					<h2>In TURBO RESOURCES MIDDLE EAST We strive to provide customers with the best plumbing equipment and services. With many years of experience and a professional team, we guarantee that every detail of your project will be executed at the highest level.</h2>
					<div className='about_list'>
						<h3>Our key advantages:</h3>
						<ul>
							<li>Quality: We work only with proven brands and materials</li>
							<li>Experience: More than 10 years of successful work in the plumbing services market</li>
							<li>Customer orientation: Individual approach to each client</li>
						</ul>
					</div>
				</div>
				<div className='about_img_block'>
					<img src={aboutImg} alt='aboutImg' />
				</div>
			</div>
		</main>
	)
}
