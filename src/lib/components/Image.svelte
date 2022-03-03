<script context="module">
  export const baseImageUrl = import.meta.env.VITE_EXTERNAL_IMAGE_BASE_URL;
  export function buildUrl(filename, transformation = 't_fallback', extension = 'webp') {
    return baseImageUrl
      .replace('__TRANSFORMATION__', transformation)
      .replace('__FILENAME__', filename)
      .replace('__EXTENSION__', extension);
  }
</script>

<script>
  export let filename;
  export let alt = '';

  let src = buildUrl(filename, 't_fallback', 'jpg');
  // prettier-ignore
  let srcset = `${buildUrl(filename, 't_webp-x4')} 4x, ${buildUrl(filename,'t_webp-x3')} 3x, ${buildUrl(filename, 't_webp-x2')} 2x, ${buildUrl(filename, 't_webp-x1')} 1x`;
</script>

<img {srcset} {src} {alt} loading="lazy" />
