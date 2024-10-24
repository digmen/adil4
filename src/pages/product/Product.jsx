import React from 'react'


import './product.css'

import p1 from './images/p1.png'
import p2 from './images/p2.png'
import p3 from './images/p3.png'
import p4 from './images/p4.png'

export default function Product() {
	return (
		<main className='product' id='products'>
			<div className='product_title'>
				<h1>Pro<strong>duct</strong></h1>
				<div className='dot'>
					<div className='dot1'></div>
					<div className='dot2'></div>
					<div className='dot3'></div>
					<div className='dot4'></div>
					<div className='dot5'></div>
				</div>
			</div>
			<div className='product_second_block'>
				<div className='product_text_block'>
					<h2>We offer a wide range of plumbing equipment for professionals and home users. Each product category is carefully selected to ensure high quality, durability and efficiency.</h2>
				</div>
				<div className='product_card_block'>
					<div className='product_card'>
						<img src={p1} alt='' />
						<p>Sinks and washbasins: Stylish solutions for kitchen and bathroom</p>
					</div>
					<div className='product_card'>
						<img src={p2} alt='' />
						<p>Baths and showers: Modern models for comfort and relaxation</p>
					</div>
					<div className='product_card'>
						<img src={p3} alt='' />
						<p>Pipes and fittings: High-quality materials for reliable plumbing systems</p>
					</div>
					<div className='product_card'>
						<img src={p4} alt='' />
						<p>Faucets and taps: Models with convenient operation and water saving function</p>
					</div>
				</div>
			</div>
		</main>
	)
}
