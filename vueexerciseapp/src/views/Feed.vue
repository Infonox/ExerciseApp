<template>
  <div class="section">
    <div class="columns">
      <div class="column is-one-third is-offset-one-third">
        <div class="post" v-for="(p, i) in posts" :key="p.src">
          <post :post="p" @remove="remove(p, i)" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Post from '../components/Posts.vue';
import session from "../services/session";
import { Delete, GetFeed } from "../services/posts";
export default {
  components: { Post },
    data: ()=> ({
     posts:[]
    }),
    async mounted(){
        this.posts = await GetFeed(session.user.handle)
    },
    methods: {
        async remove(post, i){
            console.log({post})
            const response = await Delete(post._id)
            if(response.deleted){
                this.posts.splice(i, 1)
            }
        }
    }
}

</script>


<style>
@import url(https://fonts.googleapis.com/css2?family=Playfair+Display+SC&display=swap);
@import url(https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300&display=swap);
@import url(https://fonts.googleapis.com/css2?family=Amatic+SC&family=Roboto+Condensed:wght@300&display=swap);
@import url("../assets/styles.css");
</style> 