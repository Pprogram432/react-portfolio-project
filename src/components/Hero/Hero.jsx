import React from 'react';
import styles from './Hero.module.css';
import { FaGithub, FaLinkedinIn, FaFacebookF } from 'react-icons/fa6';
import { AiFillPlayCircle } from "react-icons/ai";
import { TypeAnimation } from 'react-type-animation'
import Tilt from 'react-parallax-tilt';

function Hero() {
  return (
    
    <div className={styles.hero_wrapper}>
      <div className={styles.container}>
        <div className={styles.hero_con}>
          <div className={styles.hero_info}>
            <p className={styles.text_1} >Hi, it's me</p>
            <ul className={styles.hero_icon}>
               <a href="/" ><AiFillPlayCircle /></a>
            </ul>

            <h3 className={styles.text_2}>Program</h3>
            <p className={styles.text_3}>
                <span style={{ marginRight: '10px'}}> I'm a</span>
                <TypeAnimation
                  sequence={[
                    // Same substring at the start will only be typed out once, initially
                    ' Front-end Developer',
                    1000, // wait 1s before replacing "Mice" with "Hamsters"
                    'Web Developer',
                    1000,
                  ]}
                  speed={50}
                  repeat={Infinity}
    />
               
            </p>

            <p className={styles.text_4}>
                สวัสดีครับ ผมนายธนเดช ผิวขาว อายุ 17 ปี  เป็นนักกีฬาแบดมินตันที่ชื่นชอบความท้าทายและพัฒนาตัวเองอยู่เสมอ นอกจากนี้ผมยังมีความสนใจในด้านการเขียนโปรแกรมและเทคโนโลยี <br />
                ชอบใช้เวลาว่างเรียนรู้สิ่งใหม่ๆ และพัฒนาโปรเจกต์ต่างๆ ด้วยตัวเอง รวมถึงการเล่นเกมที่ช่วยให้ผมผ่อนคลายและเพิ่มความคิดสร้างสรรค์ครับ ยินดีที่ได้รู้จักทุกคนครับ 😊
            </p>

            <ul className={styles.hero_social} aria-label="Social Media Links">
                <li><a href="/" ><FaGithub /></a></li>                      
                <li><a href="/" ><FaLinkedinIn /></a></li>                         
                <li><a href="/" ><FaFacebookF /></a></li>                 
            </ul>
            </div>
            <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}>
              <div className={styles.hero_img}> </div>
          </Tilt>
        </div>
      </div>
    </div>
  );
}

export default Hero;
