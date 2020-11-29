<template>
  <section class="comment-list">
    <comment-preview
      v-for="comment in comments"
      :key="comment.id"
      :comment="comment"
    />
    <input placeholder="Write here to comment..."/>
  </section>
</template>

<script>
import commentPreview from './comment-preview.cmp.vue';
export default {
  props: {
    comments: {
      type: Array
    },
  },
  components:{commentPreview}
};
</script>

<style>
</style>