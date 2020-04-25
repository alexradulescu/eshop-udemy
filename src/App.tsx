import React, { FC, useEffect } from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import { Provider } from 'react-redux'
import { useDispatch, useSelector } from 'react-redux'

import { auth, createUserProfileDoc } from './firebase'
import { Header } from './components'
import { HomePage, CartPage, ShopPage, AuthPage } from './pages'
import { store, setCurrentUser } from './redux'

export const App: FC = () => {
  const dispatch = useDispatch()
  const currentUser = useSelector(state => state.user.currentUser)

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDoc(userAuth)

        userRef.onSnapshot((snapshot: any) => {
          dispatch(setCurrentUser({ id: snapshot.id, ...snapshot.data() }))
        })
      }
    })
    return () => {
      unsubscribeFromAuth()
    }
  }, [dispatch])

  const signOut = () => {
    auth
      .signOut()
      .then(() => {
        dispatch(setCurrentUser(null))
      })
      .catch(error => {
        console.log(`Couldn't sign out: `, error)
      })
  }

  const redirectIfAuth = () =>
    currentUser ? <Redirect to="/" /> : <AuthPage />

  return (
    <BrowserRouter>
      <Header signOut={signOut} />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/cart" component={CartPage} />
        <Route path="/login" render={redirectIfAuth} />
      </Switch>
    </BrowserRouter>
  )
}

export const AppWrapper = () => (
  <Provider store={store}>
    <App />
  </Provider>
)
