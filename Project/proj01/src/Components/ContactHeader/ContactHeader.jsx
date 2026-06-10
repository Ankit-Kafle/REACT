import React from 'react'
import styles from './ContactHeader.module.css'

const ContactHeader = () => {
  return (
    <div className={`container ${styles.contact_section}`}>
      <h1>CONTACT US</h1>
      <p>Hey! This is my React BootCamp project</p>
    </div>
  )
}

export default ContactHeader