import { posts } from '$lib/posts';

export const get = ({ params }) => {
  const post = posts.find((i) => i.slug === params.slug);

  if (posts) return {
    status: 200,
    body: {
      post
    }
  }

  return {
    status: 404
  }
}