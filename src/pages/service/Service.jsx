import React from 'react'

import './service.css'

import aboutImg from './images/rafiki.svg'

import icon1 from './images/icon1.svg'
import icon2 from './images/icon2.svg'
import icon3 from './images/icon3.svg'
import icon4 from './images/icon4.svg'


export default function Service() {
	return (
		<main className='service' id='service'>
			<div className='service_title'>
				<h1>Serv<strong>ice</strong></h1>
				<div className='dot'>
					<div className='dot1'></div>
					<div className='dot2'></div>
					<div className='dot3'></div>
					<div className='dot4'></div>
					<div className='dot5'></div>
				</div>
			</div>
			<div className='service_second_block'>
				<div className='service_text_block'>
					<h2>We guarantee timely and high-quality execution of all work. Contact us to get a free consultation and cost calculation.</h2>
					<div className='service_list'>
						<h3>Functions</h3>
						<ul>
							<li>Installation of equipment: From small household appliances to large plumbing systems</li>
							<li>Repair and Replacement: Quick troubleshooting</li>
							<li>Maintenance: Routine inspections and breakdown prevention</li>
						</ul>
					</div>
				</div>
				<div className='service_img_block'>
					<img src={aboutImg} alt='aboutImg' />
				</div>
			</div>
			<div className='service_advantages_list_block'>
				<div className='service_advantages_list_block_left'>
					<div className='service_advantages_list_item'>
						<img src={icon1} alt='icon' />
						<div className='service_advantages_list_text'>
							<span>Easy installation</span>
							<p>Easy instructions for any type and complexity of work</p>
						</div>
					</div>
					<div className='service_advantages_list_item'>
						<img src={icon2} alt='icon' />
						<div className='service_advantages_list_text'>
							<span>Multitasking</span>
							<p>After training, specialists become multidisciplinary employees</p>
						</div>
					</div>
				</div>
				<div className='service_advantages_list_block_left'>
					<div className='service_advantages_list_item'>
						<img src={icon3} alt='icon' />
						<div className='service_advantages_list_text'>
							<span>Training</span>
							<p>Installation and disassembly training is provided for all customers</p>
						</div>
					</div>
					<div className='service_advantages_list_item'>
						<img src={icon4} alt='icon' />
						<div className='service_advantages_list_text'>
							<span>Transparency</span>
							<p>Transparency of payments will help you keep track of your product and the training of your specialists</p>
						</div>
					</div>
				</div>
			</div>
		</main>
	)
}
