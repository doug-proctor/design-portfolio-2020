import React from 'react'
import styles from './section-sides.module.css'

import kiwaIcon from '../images/kiwa.svg'
import chefsIcon from '../images/chefs.svg'
import exposuresIcon from '../images/exposure.svg'
import sketchIcon from '../images/sketch.svg'
import yamlIcon from '../images/bootstrap.svg'

const content = [
  {
    image: kiwaIcon,
    title: 'SilverStripe deployments',
    description: 'Provision and deploy SilverStripe applications on DigitalOcean. Launching soon!',
    link: 'http://alumina.io',
    linkText: 'Check it out'
  }, {
    image: chefsIcon,
    title: 'Allergen data',
    description: 'Track allergens in every ingredient, recipe and dish. For high-end restaurants. Launching soon!',
    link: 'https://chefshandbook.dougproctor.co.uk',
    linkText: 'Check it out'
  }, {
    image: exposuresIcon,
    title: 'Field exposure calculator',
    description: 'Explore the relationship between ISO, aperture and shutter speed. Master the exposure triangle today!',
    link: 'https://exposures.dougproctor.co.uk',
    linkText: 'Check it out'
  }, {
    image: sketchIcon,
    title: 'Sketch to HTML plugin',
    description: 'Explore the relationship between ISO, aperture and shutter speed. Master the exposure triangle today!',
    linkText: 'Defunct but check it out',
    link: 'https://github.com/doug-proctor/sketch-to-html'
  },{
    image: yamlIcon,
    title: 'YAML to Bootstrap wireframer',
    description: 'Explore the relationship between ISO, aperture and shutter speed. Master the exposure triangle today!',
    linkText: 'Defunct but check it out',
    link: 'https://github.com/doug-proctor/yaml-bootstrap'
  },
]

const SectionSides = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.section}>
        <h2 className={styles.title}>Side projects & fun things</h2>
        <div className={styles.grid}>
          {content.map(card => (
            <div key={card.title} className={styles.card}>
              <img className={styles.cardImage} src={card.image} />
              <h3 className={styles.cardTitle}>{card.title}</h3>
              <p className={styles.cardText}>{card.description}</p>
              <a className={styles.link} href={card.link}>{card.linkText}</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SectionSides
