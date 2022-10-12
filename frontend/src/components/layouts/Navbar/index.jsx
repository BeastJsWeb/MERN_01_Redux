import React from "react"
import { NavLink } from "react-router-dom"
import { useDispatch } from "react-redux"

import cl from './index.module.scss'
import { Logo, SubmitButton } from "../../index"
import { logout } from "../../../store/features/userReducer/authSlice"

const Navbar = () => {
  const dispatch = useDispatch()

  const handleLogout = () => dispatch(logout())

  return (
    <header id={cl.component} >
      <div>
        <NavLink to='/' >
          <Logo />
        </NavLink>
        <NavLink to='/posts' >
          Posts
        </NavLink>
      </div>
      <SubmitButton onClick={handleLogout} >
        Logout
      </SubmitButton>
    </header>
  )
}

export { Navbar }