import React from 'react'
// import Typical from 'react-typical'
import styles from './typeout.module.css'

const words = [
  'UI designer',
  'UX designer',
  'Product designer',
  'Design thinker',
  'JAMstack architect',
  'Frontend developer',
  'CSS wizard',
  'Photographer',
  'Surfer',
];

const Typeout = () => {
  return <h1 className={styles.root}>I’m a product designer</h1>
  // return <h1 className={styles.root}>I’m a <Typical
  //   steps={['Hello', 1000, 'Hello world!', 500]}
  //   loop={Infinity}
  //   wrapper="span"
  // /></h1>
}

export default Typeout
