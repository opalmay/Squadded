<template>
  <section class="post-header flex align-center">
      <div class="avatar"><avatar :size=40 :username="post.poster.name" :src="post.poster.imgUrl"></avatar></div>
    <div>{{ post.poster.name }}</div>
  </section>
</template>

<script>
import Avatar from 'vue-avatar'
export default {
  props: {
    post: {
      type: Object,
    },
  },
    components: {
    Avatar
  },
};
</script>

<style>
</style>