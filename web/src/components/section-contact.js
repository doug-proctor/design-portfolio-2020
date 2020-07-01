import React from 'react'
import styles from './section-contact.module.css'

const content = {
  email: 'hello@dougproctor.co.uk',
  phone: '07482178555'
}

const SectionContact = () => {
  return (
    <div className={styles.root}>
      <h2 className={styles.title}>Ready to roll?</h2>
      <div className={styles.detail}>
        <a href={`mailto:${content.email}`}>{content.email}</a>
      </div>
      <div className={styles.detail}>{content.phone}</div>
    </div>
  )
}

export default SectionContact
