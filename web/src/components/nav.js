import React from 'react'
import styles from './nav.module.css'
import Typeout from './typeout'
import Avatar from './avatar'
import Button from './button'
import Spacer from './spacer'

const Nav = () => (
  <nav className={styles.root}>
    <ul>
      <li>one</li>
      <li>two</li>
    </ul>
  </nav>
)

export default Nav
