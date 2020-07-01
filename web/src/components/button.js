import React from 'react'

import styles from './button.module.css'

const Button = ({children}) => {
  return <button className={styles.root}>{children}</button>
}

export default Button
