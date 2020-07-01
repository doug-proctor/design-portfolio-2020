import React from 'react'
import styles from './section-strengths.module.css'

const content = [
  {
    title: 'User-centred',
    description: 'When a biomentric authentication startup has spent 6 years in R&D and is finally ready to hit the market, a lot of things need to be in place.'
  }, {
    title: 'Data-driven',
    description: 'When a biomentric authentication startup has spent 6 years in R&D and is finally ready to hit the market, a lot of things need to be in place.'
  }, {
    title: 'Technical',
    description: 'When a biomentric authentication startup has spent 6 years in R&D and is finally ready to hit the market, a lot of things need to be in place.'
  }, {
    title: 'T-shaped',
    description: 'When a biomentric authentication startup has spent 6 years in R&D and is finally ready to hit the market, a lot of things need to be in place.'
  }
]

const SectionStrengths = () => {
  return (
    <div className={styles.root}>
      <h2 className={styles.title}>Key strengths</h2>
      <div className={styles.grid}>
        {content.map(card => (
          <div key={card.title} className={styles.card}>
            <h3 className={styles.cardTitle}>{card.title}</h3>
            <p className={styles.cardText}>{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SectionStrengths
