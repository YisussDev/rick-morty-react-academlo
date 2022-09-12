import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import './Contact.css'

const Contact = () => {
  return (
    <div className='Contact'>
        <a href='https://github.com/YisussDev' target='_BLANK' rel='noreferrer'><FaGithub /></a>
        <a href='https://www.linkedin.com/in/jesuspaguayn/' target='_BLANK' rel='noreferrer'><FaLinkedin /></a>
    </div>
  )
}

export default Contact