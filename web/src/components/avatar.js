import React from 'react'
import Img from 'gatsby-image'
import { getFluidGatsbyImage } from 'gatsby-source-sanity'
import styles from './avatar.module.css'

import clientConfig from '../../client-config'

const Avatar = ({ avatar, sm }) => {
  const fluidProps = getFluidGatsbyImage(avatar, {maxWidth: 210}, clientConfig.sanity)

  const classNames = sm ? styles.rootSmall : styles.root

  return <Img fluid={fluidProps} alt="Doug’s avatar" className={classNames}/>
}

export default Avatar
