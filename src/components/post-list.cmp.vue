<template>
  <section class="post-list flex wrap justify-center">
    <post-preview @toggle-like="$emit('toggle-like', post)" v-for="post in posts" :key="post.id" :post="post"/>
  </section>
</template>

<script>
import postPreview from "./post-preview.cmp.vue";
export default {
  props: {
    posts: {
      type: Array,
    },
  },
  components: { postPreview },
};
</script>

<style>
</style>