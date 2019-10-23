import React from 'react'
import styles from './Topbar.module.css'

import keep from '../../assets/keep.png'
import react from '../../assets/react.png'
import firebase from '../../assets/firebase.png'

const Topbar = () => {
	return (
		<div className={styles.Topbar}>
			<span className={styles.keep}>
				<img src={keep} alt="Google Keep" />
			</span>
			<span className={styles.plus}>+</span>
			<span className={styles.react}>
				<img src={react} alt="React" />
			</span>
			<span className={styles.plus}>+</span>
			<span className={[styles.firebase].join(' ')}>
				<img src={firebase} alt="Firebase" />
			</span>
		</div>
	)
}

export default Topbar
