import React from 'react'
import {Link} from 'gatsby'
import Img from 'gatsby-image'
import { getFluidGatsbyImage } from 'gatsby-source-sanity'

import clientConfig from '../../client-config'
import styles from './section-studies.module.css'

const SectionStudies = ({ studies }) => {
  return (
    <div className={styles.root}>
      <h2 className={styles.title}>UX case studies</h2>
      <div className={styles.grid}>
        {studies.map(study => {
          const fluidProps = getFluidGatsbyImage(study.previewImage.asset._id, {maxWidth: 375}, clientConfig.sanity)
          return (
            <Link key={study.id} className={styles.cardLink} to={`studies/${study.slug.current}`}>
              <div className={styles.card}>
                <Img fluid={fluidProps} alt={`${study.client} case study preview image`} />
                <h3 className={styles.cardTitle}>{study.client}</h3>
                <h4 className={styles.cardSubtitle}>{study.title}</h4>
              </div>
            </Link>
            )
        })}
      </div>
    </div>
  )
}

export default SectionStudies
