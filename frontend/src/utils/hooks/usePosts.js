import { useMemo } from "react"

export const usePosts = (posts, filter) => {
  const {sort, query, by} = filter

  const sortedPosts = useMemo(() => {
    if (sort) {
      return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]))
    }
    return posts
  }, [sort, posts])

  const searchedPosts = useMemo(() => (
    sortedPosts.filter(post => {
      if (query || by) {
        if (by) {
          return post[by].toLowerCase().includes(query.toLowerCase())
        }
        return post.title.toLowerCase().includes(query.toLowerCase()) 
        || 
        post.author.toLowerCase().includes(query.toLowerCase())
      } 
      return post
    }) 
  ), [query, by, sortedPosts])
  return searchedPosts
}