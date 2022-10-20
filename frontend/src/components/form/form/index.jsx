import cl from './style.module.scss'

const Form = ({children, onSubmit,...props}) => {

  const handleSubmit = e => {
    e.preventDefault()
    onSubmit && onSubmit()
  }

  return (
    <form 
      {...props}
      onSubmit={handleSubmit}
      id={cl.component} 
      autoComplete="off" 
    >
      {children}
    </form>
  )
}

export { Form }