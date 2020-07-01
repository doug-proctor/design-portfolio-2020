import React from 'react'
import styles from './section-toolkit.module.css'

const content = [
  {
    title: 'Discovery',
    items: [
      'Stakeholder interviews',
      'Competitive research',
      'Contextual inquiry',
      'Heuristic analysis',
      'Google Analytics',
      'Process mapping',
      'Call centre logs',
      'Personas',
    ]
  }, {
    title: 'Discovery',
    items: [
      'Tree tests',
      'Card sorts',
      'Usability tests',
      'Journey mapping',
      'Paper prototyping',
      'Participant screening',
      'Technical feasibility',
    ]
  }, {
    title: 'Engineering',
    items: [
      'React / Redux',
      'Gatsby / Sanity',
      'Laravel',
      'Symfony',
      'XCode',
    ]
  }
]

const SectionToolkit = () => {
  return (
    <div className={styles.root}>
      <h2 className={styles.title}>What’s in my toolkit?</h2>
      <div className={styles.grid}>
        {content.map(card => (
          <div key={card.title} className={styles.card}>
            <h3 className={styles.cardTitle}>{card.title}</h3>
            <ul>
              {card.items.map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SectionToolkit
