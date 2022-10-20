import React, { useMemo } from 'react'

import { DebounceInput } from '../../../assets/lib'
import cl from './index.module.scss'

const Input = ({placeholder, loaded,...props}) => {
  
  const file = useMemo(() => {
    if (props.type === 'file') return  cl.button
  }, [props.type])
  
  const fileLoaded = useMemo(() => {
    if (loaded) return  cl.loaded
    return placeholder
  }, [loaded, placeholder])
  
  return (
    <div className={cl.component}>
      <DebounceInput 
        {...props}  
        className={file}
        id={placeholder} 
        autoComplete="off"
        debounceTimeout={500}
      />
      <label 
        className={[file, fileLoaded].join(' ')}
        htmlFor={fileLoaded} 
      >
        {placeholder}
      </label>
    </div>
  )
}

export { Input }
