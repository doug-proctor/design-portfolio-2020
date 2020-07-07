import React from 'react'
import styles from './header.module.css'
import Typeout from './typeout'
import Avatar from './avatar'
import Button from './button'
import Spacer from './spacer'

const Header = ({ jumpTo, avatar }) => (
  <div className={styles.root}>
    <Avatar avatar={avatar}/>
    <Spacer mb={40}/>
    <div className={styles.greeting}>Hi! I’m Doug</div>
    <Spacer mb={10}/>
    <Typeout />
    <Spacer mb={20}/>
    <div className={styles.intro}>I’m a London-based all-round designer with a focus on discovery and prototyping. I also have expertise in UI, design systems and design ops.</div>
    <Spacer mb={40}/>
    <Button onClick={() => jumpTo('studies')}>Jump to case studies ↓</Button>
  </div>
)

export default Header
