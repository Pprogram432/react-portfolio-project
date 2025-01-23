import React from 'react'
import styles from './Contact.module.css'
import { FaPhone, FaEnvelope } from 'react-icons/fa';

function Contact() {
  return (
    <div className={styles.contact_wrapper}>
        <div className={styles.contact_con}>
            <div className={styles.contact_info}>
                <h3>Get in touch</h3>
                <p className={styles.contact_desc}>
                    ข้อความมมม
                </p>
                <p className={styles.contact_address}>
                    123 main streat <br/>
                    bangkok thailand
                </p>
                <p><FaPhone /> (+66) 98 555 1234</p>
                <p>< FaEnvelope /> support@site.com</p>
            </div>
            <div className={styles.contact_form}>
                <form action="">
                    <div className={styles.input_group}>
                        <div>
                            <label htmlFor="first name">First Name</label>
                            <input type="text" placeholder="eg. Pro"/>
                        </div>
                        <div>
                            <label htmlFor="last name">Last Name</label>
                            <input type="text" placeholder="eg. Gram"/>
                        </div>
                    </div>
                    <label htmlFor="email address">Email Address</label>
                    <input type="email" placeholder='eg. program@gmail.com' />
                    <label htmlFor="message">Your message</label>
                    <textarea name="" cols="30" rows="10" placeholder='Type here'></textarea>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        </div>      
    </div>
  )
}

export default Contact
