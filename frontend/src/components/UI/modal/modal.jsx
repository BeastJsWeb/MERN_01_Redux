import cl from './style.module.scss'

export const Modal = ({children, isActive, ...props}) => {
  
  if (!isActive) return ''
  
  return (
    <div 
      className={cl.modal} 
      {...props}
    >
      <div 
        className={cl.content} 
        onClick={e => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  )
}