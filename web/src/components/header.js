import React from 'react'
import styles from './header.module.css'
import Typeout from './typeout'
import Avatar from './avatar'
import Button from './button'
import Spacer from './spacer'

const Header = () => (
  <div className={styles.root}>
      <Avatar />
      <Spacer mb={40}/>
      <div className={styles.greeting}>Hi! I’m Doug</div>
      <Spacer mb={10}/>
      <Typeout />
      <Spacer mb={20}/>
      <div className={styles.intro}>I’m a London-based all-round designer with a focus on discovery and strategy. I have particular expertise in IA, prototyping and interaction.</div>
      <Spacer mb={40}/>
    <Button>Jump to case studies ↓</Button>
  </div>
)

export default Header
