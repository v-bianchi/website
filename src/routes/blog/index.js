import { home, blog } from '$lib/content/metadata.json';

export const get = async () => {
  const allPostFiles = import.meta.glob('/src/routes/blog/**/!(_)*.md');
  const iterablePostFiles = Object.entries(allPostFiles);

  if (!iterablePostFiles) {
    return {
      status: 404,
    };
  }

  const allPosts = await Promise.all(
    iterablePostFiles.map(async ([path, resolver]) => {
      const { metadata } = await resolver();
      const relativePath = path.replace('/src/routes', '').replace('.md', '');

      return {
        meta: metadata,
        path: relativePath,
      };
    })
  );

  const sortedPosts = allPosts.sort((a, b) => {
    return new Date(b.meta.published) - new Date(a.meta.published);
  });

  return {
    status: 200,
    body: { sortedPosts, home, blog },
  };
};
