<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    viewBox="0 0 32 32"
    aria-labelledby="iconTitle"
    role="graphics-symbol"
  >
    <title id="iconTitle">Email:</title>
    <path
      fill="#333"
      d="M28 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2Zm-2.2 2L16 14.78L6.2 8ZM4 24V8.91l11.43 7.91a1 1 0 0 0 1.14 0L28 8.91V24Z"
    />
  </svg>
</template>
<script>
export default {
  props: {
    height: String,
    width: String
  }
}
</script>
