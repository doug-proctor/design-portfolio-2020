import React from 'react'
import Img from 'gatsby-image'
import clientConfig from '../../client-config'
import { getFluidGatsbyImage } from 'gatsby-source-sanity'

import Figure from './figure'

import styles from './scene.module.css'

export default ({ node }) => {
  if (node.figures.length === 0) {
    return null
  }

  const classNames = node.pageWide ? styles.wide : styles.root

  const renderImages = () => {
    return node.figures.map(figure => {
      return (
        <div className={styles.figureWrapper} key={figure._key}>
          <Figure node={figure} />
        </div>
      )
    })
  }

  return (
    <div className={classNames}>
      {renderImages()}
    </div>
  )
}
