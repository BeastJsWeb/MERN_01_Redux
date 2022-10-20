import React from "react"
import { NavLink, Link } from "react-router-dom"
import { useDispatch } from "react-redux"

import cl from './style.module.scss'
import { logout } from "../../../../store/features/userReducer/authSlice"
import { Modal } from "../../../index"
import { useToogle } from "../../../../utils/hooks/useToogle"

export const Options = () => {
  const [isActive, handleUseModal] = useToogle()
  const dispatch = useDispatch()

  const handleLogout = () => dispatch(logout())

  return (
    <div 
      className={cl.menu} 
      onClick={handleUseModal} 
    >
      User Menu
      <Modal isActive={isActive} >
        <NavLink to='/profile' onClick={handleUseModal} >
          User Profile
        </NavLink>
        <Link to='/' onClick={handleLogout} >
          Logout
        </Link>
      </Modal>
    </div>
  )
}