import React from 'react'
import {Link} from 'gatsby'
import styles from './section-studies.module.css'

import eonThumb from '../images/eon/thumb.png'
import odThumb from '../images/onedome/thumb.png'
import ipThumb from '../images/iproov/thumb.png'

const content = [
  {
    image: eonThumb,
    title: 'E.ON Energy',
    slug: '146-000-phone-calls-later',
    subtitle: '146,000 phone calls later'
  }, {
    title: 'iProov',
    subtitle: 'Preparing to scale',
    slug: 'preparing-a-startup-for-sudden-growth',
    image: ipThumb
  }, {
    title: 'OneDome',
    subtitle: 'Digitising mortgage applications',
    slug: 'digitising-mortgage-applications',
    image: odThumb
  }
]

const SectionStudies = () => {
  return (
    <div className={styles.root}>
      <h2 className={styles.title}>UX case studies</h2>
      <div className={styles.grid}>
        {content.map(card => (
          <Link key={card.link} className={styles.cardLink} to={`studies/${card.slug}`}>
            <div className={styles.card}>
              <img className={styles.cardImage} src={card.image} alt="E.ON Energy case study thumbnail"/>
              <h3 className={styles.cardTitle}>{card.title}</h3>
              <h4 className={styles.cardSubtitle}>{card.subtitle}</h4>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default SectionStudies
