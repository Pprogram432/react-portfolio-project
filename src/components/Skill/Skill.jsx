import React from 'react'
import styles from './Skill.module.css'
import { FaSquareJs, FaPython, FaHtml5, FaReact, FaNode } from 'react-icons/fa6'

function Skill() {
  return (
    <div className={styles.skill_con}>
      <h3 className={styles.skill_title}>My Skill Set</h3>
      <ul className={styles.skill_list}>
        <li>
            <FaSquareJs />
        </li>
        <li>
            <FaPython />
        </li>
        <li>
            <FaHtml5 />
        </li>
        <li>
            <FaReact />
        </li>
        <li>
            <FaNode />
        </li>
      </ul>
    </div>
  )
}

export default Skill
