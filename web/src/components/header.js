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
    <div className={styles.intro}>I’m a London-based end-to-end designer with a focus on research, prototyping and UI. I also have expertise in interaction design, IA, design systems and engineering</div>
    <Spacer mb={40}/>
    <Button onClick={() => jumpTo('studies')}>Jump to case studies ↓</Button>
  </div>
)

export default Header
