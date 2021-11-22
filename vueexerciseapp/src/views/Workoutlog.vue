<template>
  <div class="section">
    <div class="columns">
      <div class="column is-one-third is-offset-one-third">
        <div class="workouts" v-for="(p, i) in workouts" :key="p.src">
          <exercise-tracker :workouts="p" @remove="remove(p, i)" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ExerciseTracker from '../components/ExerciseTracker.vue';
import session from "../services/session";
import { Delete, GetFeed } from "../services/exercisedata";
export default {
  components: { ExerciseTracker },
    data: ()=> ({
     workouts:[]
    }),
    async mounted(){
        this.workouts = await GetFeed(session.user.handle)
    },
    methods: {
        async remove(workouts, i){
            console.log({workouts})
            const response = await Delete(workouts._id)
            if(response.deleted){
                this.workouts.splice(i, 1)
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