import React from 'react'
import avatar from '../images/doug.png'

const Avatar = ({sm}) => {
  const styles = {
    width: 210
  }

  if (sm) styles.width = 100

  return <img src={avatar} alt="Doug’s avatar" style={styles}/>
}

export default Avatar
