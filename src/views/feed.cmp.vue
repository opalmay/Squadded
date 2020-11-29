<template>
  <section class="feed">
    <post-list @toggle-like="toggleLike" :posts="posts" />
  </section>
</template>

<script>
import postList from "../components/post-list.cmp.vue";
export default {
  data() {
    return {
      currentUser: {
        id: 1,
      },
      posts: [
        {
          poster: {
            id: 1,
            name: "Person 1",
            imgUrl: "https://www.w3schools.com/howto/img_avatar.png",
          },
          text: "look at this",
          imgUrl: "https://www.w3schools.com/howto/img_avatar.png",
          price: 123,
          likes: [1],
          comments: [
            {
              id: 1,
              poster: {
                id: 1,
                name: "Person 1",
                imgUrl: "https://www.w3schools.com/howto/img_avatar.png",
              },
              text: "wow nice",
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
              id: 2,
              poster: {
                id: 1,
                name: "Person 1",
                imgUrl: "https://www.w3schools.com/howto/img_avatar.png",
              },
              text: "wow nice",
            },
          ],
        },
      ],
    };
  },
  methods: {
    toggleLike(post) {
      const id = this.currentUser.id;
      const likes = post.likes;
      if (likes.includes(id)) {
        const index = likes.indexOf(id);
        post.likes = likes
          .slice(0, index - 1)
          .concat(likes.slice(index + 1));
      }
      else likes.push(id)
    },
  },
  components: { postList },
};
</script>

<style>
</style>