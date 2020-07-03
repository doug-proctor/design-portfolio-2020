import React from 'react'
import Img from 'gatsby-image'
import clientConfig from '../../client-config'
import { getFluidGatsbyImage } from 'gatsby-source-sanity'

import styles from './dingus.module.css'

export default ({ node }) => {
  if (node.things.length === 0) {
    return null
  }

  const renderImages = () => {
    return node.things.map(thing => {
      const fluidProps = getFluidGatsbyImage(thing.asset._ref, { maxWidth: 675 }, clientConfig.sanity)
      return (
        <figure className={styles.figure}>
          <Img fluid={fluidProps} alt={thing.alt}/>
          {thing.caption && <figcaption>{thing.caption}</figcaption>}
        </figure>
      )
    })
  }

  return (
    <div className={styles.root}>
      {renderImages()}
    </div>
  )
}
