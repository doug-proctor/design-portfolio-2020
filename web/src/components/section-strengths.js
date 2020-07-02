import React from 'react'
import styles from './section-strengths.module.css'

const content = [
  {
    title: 'User-centred',
    description: 'I believe in more empathy and less ego. There are always ways to keep people at the heart of the project, and to find ways to test assumptions, direction and implementation, rather than to blindly produce a prototype.'
  }, {
    title: 'Data-driven',
    description: 'Give me all the data. The product looks fantastic, but does it really work? With data we can set benchmarks and define success. Whether its quant or qual, data is the currency of research, and I use it throughout the project lifecycle.'
  }, {
    title: 'Strategic',
    description: 'What’s the bigger picture? Why does this business exist? I believe that understanding this is critical to informing an effective design approach. And conversely, I believe that design can be critical in devising the strategies themselves.',
  }, {
    title: 'T-shaped',
    description: 'I’m also a full-stack engineer and have delivered many successful development projects. This technical side is a powerful asset because it enables me to bridge that awkward gap between design and engineering to make a much more efficient delivery.'
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
