import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"

import cl from './style.module.scss'
import { Logo, Loader, Button } from "../../components/index"
import { Auth } from "./Auth"
import { auth } from "../../store/features/userReducer/authSlice"
import { useActions } from "../../utils/hooks/useActions"

const AuthContainer = () => {
  const {status} = useSelector(state => state.user.auth)
  const {toogled} = useSelector(state => state.user.form)
  const dispatch = useDispatch()

  const {toogleForm} = useActions()

  useEffect(() => {
    dispatch(auth())
  }, [dispatch])

  if (status === 'loading') return <Loader />

  const handleToogleForm = () => toogleForm()
  
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