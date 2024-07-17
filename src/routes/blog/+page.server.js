export const load = async ({ url, fetch }) => {
  const postRes = await fetch(`${url.origin}/api/posts.json`)
  const posts = await postRes.json()

  // TODO: retrieving uniqueCategories logic is repeated on /blog/category home page
  let uniqueCategories = {}

  posts.forEach((post) => {
    post.categories.forEach((category) => {
      if (uniqueCategories.hasOwnProperty(category)) {
        uniqueCategories[category].count += 1
      } else {
        uniqueCategories[category] = {
          title: category,
          count: 1,
        }
      }
    })
  })

  const sortedUniqueCategories = Object.values(uniqueCategories).sort(
    (a, b) => a.title > b.title
  )

  const totalRes = await fetch(`${url.origin}/api/posts/count`)
  const total = await totalRes.json()

  return {
    posts,
    total,
    uniqueCategories: sortedUniqueCategories,
  }
}
