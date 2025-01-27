import React from 'react'
import styles from './Portfolio.module.css'
import Tilt from 'react-parallax-tilt';

function Portfolio() {
  return (
    <div className={styles.port_con}>
        <h3 className={styles.port_title}>Portfolio</h3>
        <div className={styles.port_list}>
            <div className={styles.port_items}>
                <Tilt scale={1.1} transitionSpeed={1500} tiltReverse={true}>
                <img src="/src/img/portfolio6.png" alt="" />
                </Tilt>
                <p>Project Tiltle</p>
            </div>
            <div className={styles.port_items}>
                <Tilt scale={1.1} transitionSpeed={2000} tiltReverse={true}>
                <img src="/src/img/portfolio5.png" alt="" />
                </Tilt>
                <p>Project Tiltle</p>
            </div>
            <div className={styles.port_items}>
                <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
                <img src="/src/img/portfolio4.png" alt="" />
                </Tilt>
                <p>Project Tiltle</p>
            </div>
            <div className={styles.port_items}>
                <Tilt scale={1.1} transitionSpeed={3000} tiltReverse={true}>
                <img src="/src/img/portfolio3.png" alt="" />
                </Tilt>
                <p>Project Tiltle</p>
            </div>
            <div className={styles.port_items}>
                <Tilt scale={1.1} transitionSpeed={3500} tiltReverse={true}>
                <img src="/src/img/portfolio2.png" alt="" />
                </Tilt>
                <p>Project Tiltle</p>
            </div>
            <div className={styles.port_items}>
                <Tilt scale={1.1} transitionSpeed={4000} tiltReverse={true}>
                <img src="/src/img/portfolio1.png" alt="" />
                </Tilt>
                <p>Project Tiltle</p>
            </div>
        </div>      
    </div>
  )
}

export default Portfolio
