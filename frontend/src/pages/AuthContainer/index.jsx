import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"

import cl from './style.module.scss'
import { Logo, Loader, Button } from "../../components/index"
import { Auth } from "./Auth"
import { auth } from "../../store/features/userReducer/authSlice"
import { toogleForm } from "../../store/features/userReducer/formSlice"

const AuthContainer = () => {
  const {status} = useSelector(state => state.user.auth)
  const {toogled} = useSelector(state => state.user.form)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(auth())
  }, [dispatch])

  if (status === 'loading') return <Loader />

  const handleToogleForm = () => dispatch(toogleForm())
  
  return (
    <div id={cl.component} >
      <Logo />
      <Auth />
      <div>
        or
      </div>
      <Button onClick={handleToogleForm} >
        { toogled
          ? 'Log In'
          : 'Sign Up'
        }
      </Button>
    </div>
  )
}

export { AuthContainer }