import React from 'react'
import styles from './Services.module.css'
import { FaCode, FaPaintbrush, FaDesktop } from 'react-icons/fa6'

function Services() {
  return (
    <div className={styles.services_con}>
      <h3 className={styles.services_title}>My Services</h3>
      <div className={styles.services_list}>
        <div className={styles.services_items}>
            <FaCode />
            <h4>Web Development</h4>
            <p>
                Build modern, responsive websites tailored to your needs using the latest technologies.
            </p>
        </div>
        <div className={styles.services_items}>
            <FaPaintbrush />
            <h4>Web Ddesign</h4>
            <p>
                Craft visually appealing and user-friendly designs that leave lasting impressions.
            </p>
        </div>
        <div className={styles.services_items}>
            <FaDesktop />
            <h4>Front-end Consulting</h4>
            <p>
                Optimize your front-end performance and enhance your user experience with expert guidance.
            </p>
        </div>
      </div>
    </div>
  )
}

export default Services
