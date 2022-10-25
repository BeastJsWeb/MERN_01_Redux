import React from 'react'
import { useSelector } from 'react-redux'

import cl from './index.module.scss'
import { useActions } from '../../../utils/hooks/useActions'

const Pagination = () => {
  const {page, pagination} = useSelector(state => state.posts.page)

  const {changePage} = useActions()

  const handleChangePage = (newPage) =>  changePage(newPage)
  
  return (
    <div id={cl.component}>
      {pagination?.map(p => 
        <button  
          key={p} 
          onClick={() => handleChangePage(p)} 
          className={
            p === page.number ? [cl.btn, cl.active].join(' ') : cl.btn
          }
        >
          {p}
        </button>
      )}
    </div>
  )
}

export { Pagination }