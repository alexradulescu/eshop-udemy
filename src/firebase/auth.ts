import 'firebase/auth'

import firebase from './firebase'
import { firestore } from './firestore'

export const auth = firebase.auth()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export const createUserProfileDoc = async (userAuth, additionalData = null) => {
  if (!userAuth) {
    return
  }

  const userRef = firestore.doc(`users/${userAuth.uid}`)
  const snapshot = await userRef.get()
  if (!snapshot.exists) {
    const { displayName, email } = userAuth
    const createdAt = new Date()
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.warn('Error creating user: ', error.message)
    }
  }
  return userRef
}
