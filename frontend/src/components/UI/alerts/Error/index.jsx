import React from "react"

import cl from './index.module.scss'
import { useAlert } from "../../../../utils/hooks/useAlert"

const Error = ({children,...props}) => {
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

export { Error }