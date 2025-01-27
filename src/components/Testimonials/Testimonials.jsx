import React from 'react'
import styles from './Testimonials.module.css'

function Testimonials() {
  return (
    <div className={styles.testi_con}>
        <h3 className={styles.testi_title}>Testimonials</h3>
        <div className={styles.testi_list}>
            <div className={styles.testi_items}>
                <p>
                "โปรแกรมเป็นคนที่มีทักษะด้านการเขียนโปรแกรมที่ยอดเยี่ยมและสร้างสรรค์สุดๆ เขามักจะเสนอวิธีแก้ปัญหาที่น่าสนใจและช่วยให้ทีมทำงานได้อย่างมีประสิทธิภาพ"
                </p>
                <img src="https://media.istockphoto.com/id/1867533396/photo/young-asian-man-using-smart-phone-in-cafe.webp?a=1&b=1&s=612x612&w=0&k=20&c=_Bal1cuuXVr3luD6LkQkLkgNmqkV2WS_03M1d9Spez4=" alt="" />
                <h4>Program</h4>
                <p className={styles.bio}>Web developer</p>
            </div>
            <div className={styles.testi_items}>
                <p>
                "โปรแกรมเป็นบุคคลที่มีทักษะด้านการพัฒนาโปรแกรมอย่างยอดเยี่ยมและเต็มไปด้วยความคิดสร้างสรรค์ เขามักนำเสนอโซลูชันที่แปลกใหม่"
                </p>
                <img src="https://images.unsplash.com/photo-1489011397388-494518edf378?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z2FtZSUyMHdpbmR8ZW58MHx8MHx8fDA%3D" alt="" />
                <h4>Alex</h4>
                <p className={styles.bio}>Web developer</p>
            </div>
            <div className={styles.testi_items}>
                <p>
                "โปรแกรมมีความสามารถที่โดดเด่นในการแก้ไขปัญหาที่ซับซ้อนด้วยวิธีการที่สร้างสรรค์และมีประสิทธิภาพ"
                </p>
                <img src="https://images.unsplash.com/photo-1659437191722-c30c7c780d55?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGRldmlsfGVufDB8fDB8fHww" alt="" />
                <h4>Jett</h4>
                <p className={styles.bio}>Web developer</p>
            </div>
        </div>  
    </div>
  )
}

export default Testimonials
