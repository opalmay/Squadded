<template>
  <section>
    <md-card-header>
      <md-avatar>
        <img :src="post.poster.imgUrl" alt="Avatar" />
      </md-avatar>
      <div class="md-title">{{ post.poster.name }}</div>
    </md-card-header>
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