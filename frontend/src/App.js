import React from 'react'
import { useSelector } from 'react-redux'

import { PublicRoutes, PrivatRoutes } from './components/index'

const App = () => {
  const {loggedIn} = useSelector(state => state.user.auth)

  return (
    <>
    { loggedIn
      ? <PrivatRoutes />
      : <PublicRoutes />
    }
    </>
  )
}

export { App }
