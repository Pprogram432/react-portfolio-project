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
                <img src="https://images.unsplash.com/photo-1732020743205-9a1da14e36fd?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHdlYiUyMGRldmVsb3BtZW50fGVufDB8fDB8fHww" alt="" />
                </Tilt>
                <p>Project Tiltle</p>
            </div>
            <div className={styles.port_items}>
                <Tilt scale={1.1} transitionSpeed={2000} tiltReverse={true}>
                <img src="https://images.unsplash.com/photo-1593720219276-0b1eacd0aef4?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHdlYiUyMGRldmVsb3BlcnxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                </Tilt>
                <p>Project Tiltle</p>
            </div>
            <div className={styles.port_items}>
                <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
                <img src="https://plus.unsplash.com/premium_photo-1678565869434-c81195861939?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2ViJTIwZGV2ZWxvcGVyfGVufDB8fDB8fHww" alt="" />
                </Tilt>
                <p>Project Tiltle</p>
            </div>
            <div className={styles.port_items}>
                <Tilt scale={1.1} transitionSpeed={3000} tiltReverse={true}>
                <img src="https://images.unsplash.com/photo-1593720219276-0b1eacd0aef4?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHdlYiUyMGRldmVsb3BlcnxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                </Tilt>
                <p>Project Tiltle</p>
            </div>
            <div className={styles.port_items}>
                <Tilt scale={1.1} transitionSpeed={3500} tiltReverse={true}>
                <img src="https://plus.unsplash.com/premium_photo-1679177183572-a4056053b8a2?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHdlYiUyMGRldmVsb3BlcnxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                </Tilt>
                <p>Project Tiltle</p>
            </div>
            <div className={styles.port_items}>
                <Tilt scale={1.1} transitionSpeed={4000} tiltReverse={true}>
                <img src="https://plus.unsplash.com/premium_photo-1685086785054-d047cdc0e525?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2ViJTIwZGV2ZWxvcHxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                </Tilt>
                <p>Project Tiltle</p>
            </div>
        </div>      
    </div>
  )
}

export default Portfolio
