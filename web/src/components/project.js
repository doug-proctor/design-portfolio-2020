import React from 'react'
import Avatar from './avatar'
import BlockContent from './block-content'

import styles from './project.module.css'

import Spacer from './spacer'
import SectionContact from './section-contact'

function Project (props) {
  const { _rawBody, title, keyValues, avatar } = props

  const goBack = e => e.preventDefault() || window.history.back()

  const renderKeyValues = () => {
    return (
      <div className={styles.summary}>
        {
          keyValues.map(kv => (
            <dl className={styles.dl} key={kv.key}>
              <dt className={styles.dt}>{kv.key}</dt>
              <dd className={styles.dd}>{kv.value}</dd>
            </dl>
          ))
        }
      </div>
    )
  }

  return (
    <article>
      <header className={styles.header}>
        <Avatar sm avatar={avatar}/>
        <div className={styles.name}>Doug Proctor <span className={styles.job}>Strategic designer</span></div>
        <a href='/' className={styles.backLink} onClick={goBack}>
          « Back to case studies
        </a>
        <h1 className={styles.title}>{title}</h1>
        {renderKeyValues()}
      </header>
      <div className={styles.wrapper}>
        {_rawBody && <BlockContent blocks={_rawBody || []} />}
      </div>
      <Spacer mt={100}>
        <SectionContact title="Let’s make something" />
      </Spacer>
    </article>
  )
}

export default Project
