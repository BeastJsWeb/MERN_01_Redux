import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import cl from './index.module.scss'
import { changePage } from '../../../store/features/postsReducer/pageSlice'

const Pagination = () => {
  const {page, pagination} = useSelector(state => state.posts.page)
  const dispatch = useDispatch()

  const handleChangePage = (newPage) =>  dispatch(changePage(newPage))
  
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