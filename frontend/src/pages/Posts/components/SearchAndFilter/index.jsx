import React from 'react'
import { useSelector } from 'react-redux'

import cl from './index.module.scss'
import { Input, Select } from '../../../../components/index'
import { useActions } from '../../../../utils/hooks/useActions'

const SearchAndFilter = () => {
  const {filter} = useSelector(state => state.posts.filter)
  const {page} = useSelector(state => state.posts.page)

  const {filterChanged, sortPage} = useActions()

  const changeFilter = e => filterChanged(e.target)
  const pageLimit = e => sortPage(e.target.value)

  return (
    <div className={cl.component}>
      <Input 
        name='query'
        type='text'
        maxLength={20}
        value={filter?.query}
        placeholder='Search...'
        onChange={changeFilter}
      />
      <div className={cl.filter}>
        <Select 
          name='limit'
          defaultValue={{name: 'Page limit', value: page?.limit}}
          onChange={pageLimit}
          options={[
            {name: 5, value: 5},
            {name: 10, value: 10},
            {name: 20, value: 20},
            {name: 'Show all', value: -1}
          ]}
        />
        <Select 
          name='sort'
          defaultValue={{name: 'Sort', value: filter?.sort}}
          onChange={changeFilter}
          options={[
            {name: 'Title', value: 'title'},
            {name: 'Author', value: 'author'}
          ]}
        />
        <div>
          <Select 
            name='by'
            defaultValue={{name: 'Find by', value: filter?.by}}
            onChange={changeFilter}
            options={[
              {name: 'Title', value: 'title'},
              {name: 'Author', value: 'author'}
            ]}
          />
        </div>
      </div>
    </div>
  )
}

export { SearchAndFilter }