<template>
  <div class="columns" style="width:500px;" >
   
      
        
      <div class="card column">
        <div class="card-image">
          <figure>
            <button class="delete" @click="$emit('remove')"></button>
          </figure>
        </div>
        <div class="card-content">
          <div class="media">
            <div class="media-left"></div>
            <div class="media-content">
              <p class="title is-4">
                {{ workouts.user.firstName }} {{ workouts.user.lastName }}
              </p>
              <p class="subtitle is-6">{{ workouts.user.handle }}</p>
            </div>
          </div>

          <div class="content">
            {{ workouts.time }}
            {{ workouts.action }}
            {{ workouts.date }}
            <br />
            <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
          </div>
        </div>
        <footer class="card-footer"></footer>
      </div>
    </div>

</template>

<script>
export default {
  props: {
    workouts: Object,
  },
};
</script>

<style>
button.delete {
  position: absolute;
  top: 5px;
  right: 5px;
}
</style>