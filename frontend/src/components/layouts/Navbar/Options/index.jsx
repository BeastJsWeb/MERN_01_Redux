import React from "react"
import { NavLink, Link } from "react-router-dom"

import cl from './style.module.scss'
import { Modal } from "../../../index"
import { useToogle } from "../../../../utils/hooks/useToogle"
import { useActions } from "../../../../utils/hooks/useActions"

export const Options = () => {
  const [isActive, handleUseModal] = useToogle()

  const {logout} = useActions()

  const handleLogout = () => logout()

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