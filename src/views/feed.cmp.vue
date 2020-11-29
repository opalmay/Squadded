<template>
  <section class="feed">
    <post-list-cmp :posts="posts"/>
  </section>
</template>

<script>
import postListCmp from "../components/post-list.cmp.vue";
export default {
  data() {
    return {
      posts: [
        {
          poster: {
            id:1,
            name: "Person 1",
            imgUrl: "https://www.w3schools.com/howto/img_avatar.png",
          },
          text: "look at this",
          imgUrl: "https://www.w3schools.com/howto/img_avatar.png",
          price: 123,
          likes: [1],
          comments: [
            {
              poster: {
                id:1,
                name: "Person 1",
                imgUrl: "https://www.w3schools.com/howto/img_avatar.png",
              },
              text: 'wow nice'
            },
          ],
        },
                {
          poster: {
            name: "Person 1",
            imgUrl: "https://www.w3schools.com/howto/img_avatar.png",
          },
          text: "look at this",
          imgUrl: "https://www.w3schools.com/howto/img_avatar.png",
          price: 123,
          likes: [1],
          comments: [
            {
              poster: {
                name: "Person 1",
                imgUrl: "https://www.w3schools.com/howto/img_avatar.png",
              },
              text: 'wow nice'
            },
          ],
        },
      ],
    };
  },
  components: { postListCmp },
};
</script>

<style>
</style>