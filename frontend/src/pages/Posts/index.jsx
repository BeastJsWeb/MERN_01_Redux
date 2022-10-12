import React, { useEffect } from "react"
import { NavLink, Outlet } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"

import cl from './index.module.scss'
import { usePosts, PostsContext } from "../../utils/index"
import { Loader, Error, Pagination, HomeLink } from "../../components/index"
import { SearchAndFilter } from "./components/SearchAndFilter"
import { PostsList } from "./components/postsList"
import { fetch } from "../../store/features/postsReducer/postsSlice"
import { usePage } from "../../utils/index"

const Posts = () => {
  const {posts, status, error} = useSelector(state => state.posts.posts)
  const {filter} = useSelector(state => state.posts.filter)
  const {loggedIn} = useSelector(state => state.user.auth)
  const {page} = useSelector(state => state.posts.page)
  const dispatch = useDispatch()

  useEffect(() => {
    loggedIn && dispatch(fetch())
  }, [dispatch, loggedIn])

  const searchedPosts = usePosts(posts, filter)

  const [currentPage] = usePage(searchedPosts, page)

  return (
    <PostsContext.Provider 
      value={{currentPage, searchedPosts}} 
    >
      <section id={cl.component}>
        <HomeLink/>
        <div className={cl.body}>
          <section id={cl.list}>
            <SearchAndFilter />
            { error &&
              <Error>{error}</Error>
            }
            { status.fetch === 'loading'
              ? <Loader />
              : <>
                <PostsList />
                <Pagination />
                </>
            }
          </section>
          <section id={cl.item}>
            <NavLink to='form' >Create new post</NavLink>
            <Outlet />
          </section>
        </div>
      </section>
    </PostsContext.Provider>
  )
}

export { Posts }