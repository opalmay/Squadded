<template>
  <section class="comment-preview flex align-center">
    <div class="avatar">
      <avatar
        :size="30"
        :username="comment.poster.name"
        :src="comment.poster.imgUrl"
      ></avatar>
    </div>
    <p>{{ comment.text }}</p>
  </section>
</template>

<script>
import Avatar from "vue-avatar";
export default {
  props: {
    comment: {
      type: Object,
    },
  },
  components:{Avatar}
};
</script>

<style>
</style>