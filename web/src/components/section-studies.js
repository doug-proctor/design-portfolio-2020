import React from 'react'
import styles from './section-studies.module.css'
import eonThumb from '../images/eon/thumb.png'

const content = [
  {
    title: 'E.ON Energy',
    subtitle: '146,000 phone calls later',
    image: eonThumb
  }, {
    title: 'E.ON Energy',
    subtitle: '146,000 phone calls later',
    image: eonThumb
  }, {
    title: 'E.ON Energy',
    subtitle: '146,000 phone calls later',
    image: eonThumb
  }
]

const SectionStudies = () => {
  return (
    <div className={styles.root}>
      <h2 className={styles.title}>UX case studies</h2>
      <div className={styles.grid}>
        {content.map(card => (
          <div key={card.title} className={styles.card}>
            <img className={styles.cardImage} src={eonThumb} alt="E.ON Energy case study thumbnail"/>
            <h3 className={styles.cardTitle}>{card.title}</h3>
            <h4 className={styles.cardSubtitle}>{card.subtitle}</h4>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SectionStudies
