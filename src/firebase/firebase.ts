import * as firebase from 'firebase/app'
// import 'firebase/auth'
import 'firebase/firestore'

const config = {
  apiKey: 'AIzaSyAPAACrdLQKYSDD7k9Mgf1Xsmx6a_SJNH4',
  authDomain: 'eshop-d2b1a.firebaseapp.com',
  databaseURL: 'https://eshop-d2b1a.firebaseio.com',
  projectId: 'eshop-d2b1a',
  storageBucket: 'eshop-d2b1a.appspot.com',
  messagingSenderId: '739123268908',
  appId: '1:739123268908:web:255168efa8223f7ce67089',
  measurementId: 'G-54BW05JZ1W'
}

firebase.initializeApp(config)

// export const auth = firebase.auth()
export const firestore = firebase.firestore()

// const provider = new firebase.auth.GoogleAuthProvider()
// provider.setCustomParameters({ prompt: 'select_account' })
// export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
