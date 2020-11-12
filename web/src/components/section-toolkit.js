import React from 'react'
import styles from './section-toolkit.module.css'

import compassIcon from '../images/compass.svg'
import drawingIcon from '../images/drawing.svg'
import devIcon from '../images/dev.svg'

const content = [
  {
    title: 'Discovery',
    subtitle: 'Solving for lack of information',
    image: compassIcon,
    items: [
      'Personas',
      'Contextual inquiry',
      'Process mapping',
      'Stakeholder interviews',
      'Heuristic analysis',
      'Google Analytics',
      'Competitive research',
      'Call centre logs',
    ]
  }, {
    title: 'Prototyping & UI',
    subtitle: 'Solving for user needs & business goals',
    image: drawingIcon,
    items: [
      'Journey mapping',
      'Card sorts',
      'Paper prototyping',
      'Usability tests',
      'Tree tests',
      // 'Participant screening',
      // 'Technical feasibility',
      'Component-based design',
      'Design systems'
    ]
  }, {
    title: 'Engineering',
    subtitle: 'Build and deliver the solution',
    image: devIcon,
    items: [
      'HTML + CSS + JavaScript',
      'React / Redux',
      'Gatsby',
      'TypeScript',
      'Sanity',
      'Laravel',
      'Symfony',
    ]
  }
]

const SectionToolkit = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.section}>
        <h2 className={styles.title}>What’s in my toolkit?</h2>
        <div className={styles.grid}>
          {content.map(card => (
            <div key={card.title} className={styles.card}>
              <img className={styles.cardImage} src={card.image} />
              <h3 className={styles.cardTitle}>{card.title}</h3>
              <h2 className={styles.cardSubtitle}>{card.subtitle}</h2>
              <ul>
                {card.items.map(item => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SectionToolkit
