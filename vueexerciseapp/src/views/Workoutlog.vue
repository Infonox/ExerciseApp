<template>
  <div class="section">
    <div class="columns">
      <div class="column">
        <div class="workouts" v-for="(p, i) in workouts" :key="p.src">
          <exercise-tracker :workouts="p" @remove="remove(p, i)" />
        </div>
      </div>
      <div class="column">
       <div>
                <workoutedit :new-workout="newWorkout" @add="add()"/>
            </div>
      </div>
    </div>
    
  </div>
</template>

<script>
import ExerciseTracker from '../components/ExerciseTracker.vue';
import session from "../services/session";
import { Delete, GetFeed, Add } from "../services/exercisedata";
import Workoutedit from "../components/Workoutedit.vue"
const newWorkout = ()=> ({ user: session.user, user_handle: session.user.handle })
export default {
  components: { ExerciseTracker,
  Workoutedit },
    data: ()=> ({
     workouts:[],
     newWorkout: newWorkout()
    }),
    async mounted(){
        this.workouts = await GetFeed(session.user.handle)
    },
    methods: {
        async remove(workout, i){
            console.log({workout})
            const response = await Delete(workout._id)
            if(response.deleted){
                this.workouts.splice(i, 1)
            }
        },
         async add(){
            console.log("Adding new workout at " + new Date())
            const response = await Add(this.newWorkout);
            console.log({ response });
            if(response){
                this.workouts.unshift(response);
                
        
                this.newWorkout = newWorkout();
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