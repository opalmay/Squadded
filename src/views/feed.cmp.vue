<template>
  <section class="feed">
    <post-list
      @toggle-like="toggleLike"
      @add-comment="addComment"
      :posts="posts"
    />
  </section>
</template>

<script>
import postList from "../components/post-list.cmp.vue";
export default {
  data() {
    return {
      currentUser: {
        id: 1,
        name: "Person 1",
        imgUrl: "https://www.w3schools.com/howto/img_avatar.png",
      },
      posts: [
        {
          poster: {
            id: 1,
            name: "Person 1",
            imgUrl: "https://www.w3schools.com/howto/img_avatar.png",
          },
          text: "Great View",
          imgUrl:
            "https://www.lametayel-thailand.com/wp-content/uploads/2018/08/11-aerial-view.jpg",
          price: 123,
          likes: [1, 2, 3, 4, 5, 6],
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
                id: 2,
                name: "Person 2",
                imgUrl: "https://www.w3schools.com/howto/img_avatar2.png",
              },
              text: "Great pic",
            },
          ],
        },
        {
          poster: {
            name: "Person 2",
            imgUrl: "https://www.w3schools.com/howto/img_avatar2.png",
          },
          text: "a nice bridge",
          imgUrl: "https://www.w3schools.com/howto/img_forest.jpg",
          price: 123,
          likes: [2,3,4,5],
          comments: [
            {
              id: 2,
              poster: {
                id: 2,
                name: "Person 2",
                imgUrl: "https://www.w3schools.com/howto/img_avatar2.png",
              },
              text: "Great pic",
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
          likes: [1,3,5,6,5,6],
          comments: [
            {
              id: 2,
              poster: {
                id: 2,
                name: "Person 2",
                imgUrl: "https://www.w3schools.com/howto/img_avatar2.png",
              },
              text: "Great pic",
            },
          ],
        },
        {
          poster: {
            name: "Person 1",
            imgUrl: "https://www.w3schools.com/howto/img_avatar.png",
          },
          text: "Pretty sunset",
          imgUrl: "https://cf.bstatic.com/images/hotel/max1280x900/232/232358529.jpg",
          price: 123,
          likes: [1],
          comments: [
            {
              id: 2,
              poster: {
                id: 2,
                name: "Person 2",
                imgUrl: "https://www.w3schools.com/howto/img_avatar2.png",
              },
              text: "Great pic",
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
                id: 2,
                name: "Person 2",
                imgUrl: "https://www.w3schools.com/howto/img_avatar2.png",
              },
              text: "Great pic",
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
        post.likes = likes.slice(0, index).concat(likes.slice(index + 1));
      } else likes.push(id);
    },
    addComment(post, commentText) {
      post.comments.push({ poster: this.currentUser, text: connentText });
    },
  },
  components: { postList },
};
</script>

<style>
</style>