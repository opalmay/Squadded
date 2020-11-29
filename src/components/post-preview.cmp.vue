<template>
  <section class="post-preview">
    <post-header-cmp :post="post" />
    <div>
      {{ post.text }}
    </div>
    <post-footer-cmp :post="post" />
  </section>
</template>

<script>
import PostFooterCmp from "./post-footer.cmp.vue";
import postHeaderCmp from "./post-header.cmp.vue";
export default {
  components: { postHeaderCmp, PostFooterCmp },
  props: {
    post: {
      type: Object,
    },
  },
};
</script>

<style>
</style>