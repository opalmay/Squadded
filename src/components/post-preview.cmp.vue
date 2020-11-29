<template>
  <section class="post-preview">
    <post-header-cmp :post="post" />
    <div>
      <img class="post-img" :src="post.imgUrl" />
      {{ post.text }}
    </div>
    <post-footer-cmp :post="post" />
    <comment-list-cmp :comments="post.comments"/>
  </section>
</template>

<script>
import CommentListCmp from './comment-list.cmp.vue';
import PostFooterCmp from "./post-footer.cmp.vue";
import postHeaderCmp from "./post-header.cmp.vue";
export default {
  components: { postHeaderCmp, PostFooterCmp, CommentListCmp },
  props: {
    post: {
      type: Object,
    },
  },
};
</script>

<style>
</style>