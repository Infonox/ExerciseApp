<template>
  <div class="section">
    <div class="columns">
      <div class="column" style="border-style: groove">
        <h1 class="title">Create a new post!</h1>

        <post-edit :new-post="newPost" @add="add()" />
      </div>

      <div class="column" style="border-style: groove">
        <h1 class="title">New post preview:</h1>
        <post :post="newPost" />
      </div>

      <div class>
        <div
          class="post column"
          style="border-style: double; alignment: center"
          v-for="(p, i) in posts"
          :key="p.src"
        >
          <post :post="p" @remove="remove(p, i)" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Post from "../components/Post.vue";
import session from "../services/session";
import { Add, Delete, GetFeed } from "../services/posts";
import PostEdit from "../components/Postedit.vue";
const newPost = () => ({
  user: session.user,
  user_handle: session.user.handle,
  pic: session.user.pic,
});
export default {
  components: {
    Post,
    PostEdit,
  },
  data: () => ({
    posts: [],
    newPost: newPost(),
  }),
  async mounted() {
    this.posts = await GetFeed(session.user.handle);
  },
  methods: {
    async remove(post, i) {
      console.log({ post });
      const response = await Delete(post._id);
      if (response.deleted) {
        this.posts.splice(i, 1);
      }
    },
    async add() {
      console.log("Adding new post at " + new Date());
      const response = await Add(this.newPost);
      console.log({ response });
      if (response) {
        this.posts.unshift(response);

        this.newPost = newPost();
      }
    },
  },
};
</script>

<style>
.card {
  margin-bottom: 10px;
}
</style>