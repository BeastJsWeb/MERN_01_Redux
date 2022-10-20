import React from 'react'

import cl from './index.module.scss'
import { DebounceInput } from '../../../assets/lib'

const Textarea = ({placeholder,...props}) => {
  return (
    <div className={cl.component}>
      <DebounceInput element="textarea" 
        {...props} 
        id={placeholder}  
        minLength={2}
        debounceTimeout={500}
      />
      <label htmlFor={placeholder} >
        {placeholder}
      </label>
    </div>
  )
}

export { Textarea }
