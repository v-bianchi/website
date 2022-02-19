import { posts } from '$lib/posts';

export const get = () => {
  if (posts) return {
    status: 200,
    body: {
      posts
    }
  }

  return {
    status: 404
  }
}