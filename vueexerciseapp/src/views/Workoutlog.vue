<template>
  <div>
    <section class="hero is-danger">
      <div class="hero-body">
        <p class="title">
          Workout Log
          <i class="fas fa-clipboard fa-2x"></i>
        </p>

        <p class="subtitle">Record your Exercise data!</p>
      </div>
    </section>
 

    <ExerciseTracker/>
    </div>

  
</template>

<script>
import ExerciseTracker from "../components/ExerciseTracker.vue";
export default {

  data:()=> ({

    workoutNumber: null,
    workoutName: null,
    workoutDate: null,
    timeSpent: null,
   


  }),
  components:{

    ExerciseTracker,

  },
};
</script>

<style>
@import url(https://fonts.googleapis.com/css2?family=Playfair+Display+SC&display=swap);
@import url(https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300&display=swap);
@import url(https://fonts.googleapis.com/css2?family=Amatic+SC&family=Roboto+Condensed:wght@300&display=swap);
@import url("../assets/styles.css");
</style>