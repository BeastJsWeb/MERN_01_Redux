import styles from './index.module.scss'

const Select = ({options, defaultValue,...props}) => {
  return (
    <label className={styles.component} >
      <select 
        {...props} 
      >
        <option 
          value={defaultValue.value}  
          hidden 
        >
          {defaultValue.name}
        </option>
        {options.map(option => 
          <option 
            key={option.value}
            value={option.value} 
          >
            {option.name}
          </option>
        )}
      </select>
    </label>
  )
}

export { Select }