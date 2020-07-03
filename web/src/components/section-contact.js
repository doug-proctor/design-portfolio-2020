import React from 'react'
import styles from './section-contact.module.css'
import Spacer from './spacer'

const content = {
  email: 'hello@dougproctor.co.uk',
  phone: '07482178555'
}

const SectionContact = ({ title }) => {
  return (
    <div>
      <div className={styles.wrapper}>
        <div className={styles.root}>
          <h2 className={styles.title}>{ title || 'Ready to roll?' }</h2>
          <div className={styles.detail}>
            <a href={`mailto:${content.email}`}>{content.email}</a>
          </div>
          <div className={styles.detail}>{content.phone}</div>
        </div>
      </div>
      <Spacer pb={100} pt={100}>
        <p style={{textAlign: 'center', opacity: 0.3}}>JAMstack! This site is built with Gatsby and Sanity.io</p>
      </Spacer>
    </div>
  )
}

export default SectionContact
