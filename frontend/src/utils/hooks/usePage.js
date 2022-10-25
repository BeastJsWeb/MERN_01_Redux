import { useEffect, useMemo } from "react"
import { useDispatch } from "react-redux"

import { getCurrentPage, getPageCount } from "../pages/pages"
import { pageActions } from "../../store/features/postsReducer/pageSlice"

export const usePage = (posts, page) => {
  const dispatch = useDispatch()

  const currentPage = useMemo(() => {
  return getCurrentPage(posts, page)
  }, [page, posts])

  useEffect(() => {
    if (!currentPage.length && posts.length) {
      dispatch(pageActions.nullPage())
    }
  }, [dispatch, currentPage.length, posts.length])

  const pageCount = useMemo(() => {
    return getPageCount(posts, page.limit)
  }, [posts, page.limit])

  useEffect(() => {
    dispatch(pageActions.setPagination(pageCount))
  }, [dispatch, pageCount])

  return [currentPage]
}