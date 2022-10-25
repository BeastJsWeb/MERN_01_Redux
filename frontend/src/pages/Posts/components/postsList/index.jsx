import React, {useContext} from "react"
import { NavLink } from "react-router-dom"
import { useSelector } from "react-redux"

import cl from './index.module.scss'
import { PostsContext } from "../../../../utils"
import { useActions } from "../../../../utils/hooks/useActions"

const PostsList = () => {
  const {post} = useSelector(state => state.posts.post)
  
  const {currentPage, searchedPosts} = useContext(PostsContext)

  const {openPost} = useActions()

  const handleOpenPost = e => openPost({currentPage, e})

  if (!searchedPosts) return ''

  return (
    <div className={cl.component} >
      <div id={cl.total} >
        { searchedPosts.length
          ? <>Total posts: {searchedPosts.length}</>
          : <div>Posts not found</div>
        }
      </div>
      <div id={cl.totalList} >
        { searchedPosts.length
          ? currentPage.map(p => 
              <NavLink to={`post/${p._id}`} key={p._id} >
                <div 
                  id={p._id} 
                  onClick={handleOpenPost}
                  className={
                    p === post ? [cl.post, cl.active].join(' ') : cl.post
                  }
                >
                  <div>
                    {p.title}
                  </div>
                  <div>
                    Author: {p.author}
                  </div>
                </div>
              </NavLink> 
            )
          : ''
        }
      </div>
    </div>
  )
}

export { PostsList }