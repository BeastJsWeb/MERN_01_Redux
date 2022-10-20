import React from "react"
import { NavLink } from "react-router-dom"

import cl from './index.module.scss'
import { Logo } from "../../index"
import { Options } from "./Options"

const Navbar = () => {

  return (
    <header className={cl.navbar} >
      <div>
        <NavLink to='/' >
          <Logo />
        </NavLink>
        <NavLink to='/posts' >
          Posts
        </NavLink>
      </div>
      <Options />
    </header>
  )
}

export { Navbar }