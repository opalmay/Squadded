<template>
  <section class="post-footer flex align-center space-between">
    <p>${{ post.price }}</p>
    <div>
      <button class="svg" @click="$emit('toggle-comments')">
        <img src="@/assets/img/comment.svg" />
        <span>{{ commentsLength }}</span>
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
  computed: {
    commentsLength() {
      const length = this.post.comments.length;
      if (length > 99) return '99+';
      else return length;
    },
    likesLength() {
      const length = this.post.likes.length;
      if (length > 99) return '99+';
      else return length;
    },
  },
};
</script>

<style>
</style>