<template>
<section>
  <div class="card">
  <div class="card-image">
    <figure class="image is-4by3">
      <img :src="post.src" :alt="post.alt">
      <button class="delete" @click="$emit('remove')"></button>
    </figure>
  </div>
  <div class="card-content">
    <div class="media">
      <div class="media-left">
        <figure class="image is-48x48">
          <img :src="post.user.pic" alt="Placeholder image">
        </figure>
      </div>
      <div class="media-content">
        <p class="title is-4"> {{post.user.firstName}} {{post.user.lastName}} </p>
        <p class="subtitle is-6">{{post.user.handle}}</p>
        
      </div>
    </div>

    <div class="content">
      {{post.caption}}
      <br>
      <time datetime="post.time">{{prettyDate}}</time>
    </div>
  </div>
    <footer class="card-footer">
        
  </footer>
</div>
</section>
</template>

<script>
export default {
    props: {
        post: Object,
       
    },
     computed: {
      prettyDate(){
        if(this.post.time){

          return new Date(this.post.time).toDateString()
        

        }else{
          return ''
        }
       
      }
    }
}
</script>

<style>
  button.delete {
        position: absolute;
        top: 5px;
        right: 5px;
    }
</style>