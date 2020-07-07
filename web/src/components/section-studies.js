import React from 'react'
import {Link} from 'gatsby'
import {buildImageObj} from '../lib/helpers'
import {imageUrlFor} from '../lib/image-url'

import styles from './section-studies.module.css'

const SectionStudies = ({ studies }) => {
  return (
    <div className={styles.root}>
      <h2 className={styles.title}>UX case studies</h2>
      <div className={styles.grid}>
        {studies.map(study => (
          <Link key={study.id} className={styles.cardLink} to={`studies/${study.slug.current}`}>
            <div className={styles.card}>
              <img className={styles.cardImage} src={imageUrlFor(buildImageObj(study.previewImage))
                .width(600)
                .url()} alt={`${study.client} case study thumbnail`}/>
              <h3 className={styles.cardTitle}>{study.client}</h3>
              <h4 className={styles.cardSubtitle}>{study.title}</h4>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default SectionStudies
