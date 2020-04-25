import 'firebase/firestore'

import firebase from './firebase'

export const firestore = firebase.firestore()

/**
 * firestore.collection('users').doc('id')...
 * firestore.doc('users/id/.../...')
 */
