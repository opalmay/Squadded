<template>
  <section>
    <md-card>
      <post-header-cmp :post="post" />
      <md-card-content>
        {{ post.text }}
      </md-card-content>
      <post-footer-cmp :post="post" />
    </md-card>
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