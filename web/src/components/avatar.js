import React from 'react'
// import styles from './avatar.module.css'
import avatar from '../images/doug.png'

const Avatar = ({sm}) => {
  return <img src={avatar} alt="Doug’s avatar" width={ sm ? '100' : '210'}/>
}

export default Avatar
