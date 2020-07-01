import React from 'react'
import styles from './section-sides.module.css'

import kiwaIcon from '../images/kiwa.svg'
import chefsIcon from '../images/chefs.svg'
import exposuresIcon from '../images/exposures.svg'
import sketchIcon from '../images/sketch.svg'
import yamlIcon from '../images/yaml.svg'

const content = [
  {
    image: kiwaIcon,
    title: 'SilverStripe deployments',
    description: 'Provision and deploy SilverStripe applications on DigitalOcean. Launching soon!',
    link: 'http://alumina.io',
  }, {
    image: chefsIcon,
    title: 'Allergen data',
    description: 'Track allergens in every ingredient, recipe and dish. For high-end restaurants. Launching soon!',
    link: 'https://chefshandbook.dougproctor.co.uk',
  }, {
    image: exposuresIcon,
    title: 'Field exposure calculator',
    description: 'Explore the relationship between ISO, aperture and shutter speed. Master the exposure triangle today!',
    link: 'https://exposures.dougproctor.co.uk',
  }, {
    image: sketchIcon,
    title: 'Sketch to HTML plugin',
    description: 'Explore the relationship between ISO, aperture and shutter speed. Master the exposure triangle today!',
    link: 'https://chefshandbook.dougproctor.co.uk',
  },{
    image: yamlIcon,
    title: 'YAML to Bootstrap wireframer',
    description: 'Explore the relationship between ISO, aperture and shutter speed. Master the exposure triangle today!',
    link: 'https://chefshandbook.dougproctor.co.uk',
  },
]

const SectionSides = () => {
  return (
    <div className={styles.root}>
      <h2 className={styles.title}>Side projects & fun things</h2>
      <div className={styles.grid}>
        {content.map(card => (
          <div key={card.title} className={styles.card}>
            <img className={styles.cardImage} src={card.image} />
            <h3 className={styles.cardTitle}>{card.title}</h3>
            <p className={styles.cardDescription}>{card.description}</p>
            <a href={card.link}>Check it out</a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SectionSides
