import React from "react"

import cl from './style.module.scss'
import { useAlert } from "../../../../utils/hooks/useAlert"

const Success = ({children,...props}) => {
  const [alert] = useAlert(children)

  if (!alert) return ''
  
  return (
    <div 
      {...props}
      className={cl.component}
    >
      {children}
    </div>
  )
}

export { Success }