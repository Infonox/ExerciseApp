<template>
  
   
      
<article class="message is-primary">
  <div class="message-header">
     <p class="title is-4">
                {{ workouts.user.firstName }} {{ workouts.user.lastName }}
              </p>
              <br>
                <p class="subtitle is-6">{{ workouts.user.handle }}</p>
    <button class="delete" @click ="$emit('remove')" aria-label="delete"></button>
  </div>
  <div class="message-body">
    <ul>
      <h2> Time Spent: </h2>
  <li>{{ workouts.time }}</li>
  <br>
  <li>
    <h2> Workout Done: </h2>

            {{ workouts.action }}</li>
            <br>
  <li>
    <h2> Date:</h2>
    {{ workouts.date }}</li>
</ul>  
<time datetime="post.time">{{prettyDate}}</time>
     
            
  </div>
</article>
        
      

</template>

<script>
export default {
  props: {
    workouts: Object,
  },
   prettyDate(){
        if(this.workouts.time){

          return new Date(this.workouts.time).toDateString()
        

        }else{
          return 'Never'
        }
       
      }
    
};
</script>

<style>
button.delete {
  position: absolute;
  top: 5px;
  right: 5px;
}
</style>