import React, {useContext} from "react"
import { NavLink } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"

import cl from './index.module.scss'
import { openPost } from "../../../../store/features/postsReducer/postSlice"
import { PostsContext } from "../../../../utils"

const PostsList = () => {
  const {post} = useSelector(state => state.posts.post)
  const dispatch = useDispatch()
  const {currentPage, searchedPosts} = useContext(PostsContext)

  const handleOpenPost = e => dispatch(openPost({currentPage, e}))

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