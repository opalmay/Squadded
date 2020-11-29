<template>
  <section class="post-header flex align-center">
    <a href="#" class="avatar">
      <avatar
        :size="40"
        :username="post.poster.name"
        :src="post.poster.imgUrl"
      ></avatar>
    </a>
    <a href="#"><h3>{{ post.poster.name }}</h3></a>
  </section>
</template>

<script>
import Avatar from "vue-avatar";
export default {
  props: {
    post: {
      type: Object,
    },
  },
  components: {
    Avatar,
  },
};
</script>

<style>
</style>