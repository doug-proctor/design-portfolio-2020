import React from 'react'
import styles from './section-toolkit.module.css'

import compassIcon from '../images/campass.svg'
import drawingIcon from '../images/drawing.svg'
import devIcon from '../images/drawing.svg'

const content = [
  {
    title: 'Discovery',
    subtitle: 'Solving for lack of information',
    image: compassIcon,
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
    title: 'Prototyping & IA',
    subtitle: 'Solving for user needs & business goals',
    image: drawingIcon,
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
    subtitle: 'Build and deliver the solution',
    image: devIcon,
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
  )
}

export default SectionToolkit
