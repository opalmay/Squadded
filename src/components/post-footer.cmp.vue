<template>
  <section class="post-footer flex align-center space-between">
    <p>${{ post.price }}</p>
    <div>
      <button class="svg" @click="$emit('toggle-comments')">
        <img src="@/assets/img/comment.svg" />
        <span>{{ post.comments.length }}</span>
      </button>
      <button class="svg" @click="$emit('toggle-like')">
        <img src="@/assets/img/heart.svg" />
        <span>{{ post.likes.length }}</span>
      </button>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
    },
  },
};
</script>

<style>
</style>