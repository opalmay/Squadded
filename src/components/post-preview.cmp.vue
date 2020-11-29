<template>
  <section class="post-preview">
    <post-header-cmp :post="post" />
    <div>
      <img class="post-img" :src="post.imgUrl" />
      {{ post.text }}
    </div>
    <post-footer-cmp @toggle-like="$emit('toggle-like')" @toggle-comments="showComments = !showComments" :post="post" />
    <comment-list-cmp v-if="showComments" :comments="post.comments"/>
  </section>
</template>

<script>
import CommentListCmp from './comment-list.cmp.vue';
import PostFooterCmp from "./post-footer.cmp.vue";
import postHeaderCmp from "./post-header.cmp.vue";
export default {
    props: {
    post: {
      type: Object,
    },
  },
  data(){
    return{
      showComments:false
    }
  },
  components: { postHeaderCmp, PostFooterCmp, CommentListCmp },
};
</script>

<style>
</style>