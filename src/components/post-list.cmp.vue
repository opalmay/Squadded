<template>
  <section class="post-list flex wrap justify-center">
    <post-preview-cmp v-for="post in posts" :key="post.id" :post="post"/>
  </section>
</template>

<script>
import postPreviewCmp from "./post-preview.cmp.vue";
export default {
  props: {
    posts: {
      type: Array,
    },
  },
  components: { postPreviewCmp },
};
</script>

<style>
</style>