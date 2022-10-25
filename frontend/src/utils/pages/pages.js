export const getPageCount = (totalCount, limit) => {
  const pages = totalCount.length / limit
  return Math.ceil(pages)
}

export const getCurrentPage = (posts, page) => {
  const {number, limit} = page
  if (limit < 1) {
    return posts
  }
  return posts.slice(number * limit - limit, number * limit)
}