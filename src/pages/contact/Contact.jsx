import React, { useState } from 'react'

import './contact.css'

import contactImg from './images/contactImg.svg'

export default function Contact() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const handleSubmit = e => {
    e.preventDefault()

    fetch('https://emailsendadil4.vercel.app/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email }),
    })
      .then(response => {
        if (!response.ok) {
          return response.json().then(errorData => {
            throw new Error(errorData.error)
          })
        }
        return response.json()
      })
      .then(data => {
        console.log(data.status);

      })
      .catch(error => {
        console.error('Ошибка:', error);
      })
  }
  return (
    <main className='contact' id='contact'>
      <div className='contact_title'>
        <h1>Feed<strong>back</strong></h1>
        <div className='dot'>
          <div className='dot1'></div>
          <div className='dot2'></div>
          <div className='dot3'></div>
          <div className='dot4'></div>
          <div className='dot5'></div>
        </div>
        <div className='contact_second_block'>
          <div className='contact_text_block'>
            <h2>TURBO RESOURCES MIDDLE EAST — Manage your business with us!</h2>
            <p>We provide a full range of professional services for the installation, repair and maintenance of plumbing equipment. Regardless of the complexity of the task, our team of experienced plumbers is ready to help you with any questions.</p>
            <div className='contact_form'>
              <form onSubmit={handleSubmit}>
                <input
                  placeholder='Phone Number'
                  type='number'
                  id='name'
                  value={name}
                  onChange={e => setName(e.target.value)}
                  required
                />
                <input
                  placeholder='Email'
                  type='email'
                  id='email'
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required />
                <button type='submit'>Contact with me</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className='contact_img_block'>
        <img src={contactImg} alt='contactImg' />
      </div>
    </main>
  )
}
