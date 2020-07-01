import React from 'react'
import styles from './nav.module.css'

const items = [
  {
    title: "Strengths",
    target: "strengths"
  },{
    title: "My toolkit",
    target: "toolkit"
  },{
    title: "Case studies",
    target: "studies"
  },{
    title: "Side projects",
    target: "sides"
  },{
    title: "Contact",
    target: "contact"
  }
]

const Nav = ({ jumpTo }) => (
  <nav className={styles.root}>
    <ul className={styles.ul}>
      {items.map(item => (
        <li className={styles.li}>
          <button className={styles.button} onClick={() => jumpTo(item.target)}>{item.title}</button>
        </li>
      ))}
    </ul>
  </nav>
)

export default Nav
