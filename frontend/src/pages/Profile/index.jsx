import React from "react"

import cl from './style.module.scss'
import { SubmitButton } from "../../components"
import { useSelector } from "react-redux"
import { Edit } from "./Edit"
import { useToogle } from "../../utils/hooks/useToogle"


export const Profile = () => {
  const {username} = useSelector(state => state.user.auth)
  const [isActive, handleUseModal] = useToogle()
 
  return (
    <div className={cl.profile} >
      <div>
        <img src="/null" alt="" width={150} height={150} />
      </div>
      <div>Name:</div>
      <div>
        Nickname: {username}
      </div>
      <div>Email Address:</div>
      <SubmitButton onClick={handleUseModal} >
        Edit Profile
      </SubmitButton>
      <Edit 
        isActive={isActive} 
        onClick={handleUseModal} 
      />
    </div>
  )
}