<template>
    <form class="card" @submit.prevent="$emit('add')">
        <div class="card-content">
            <div class="content">
               
                <div class="field">
                    <label class="label">Time:</label>
                    <div class="control">
                        <textarea class="textarea" placeholder="How long you worked out for" v-model="workout.time"></textarea>
                    </div>
                </div>
                <div class="field">
                    <label class="label">Action:</label>
                    <div class="control">
                        <textarea class="textarea" placeholder="What did you do to get fit?" v-model="workout.action"></textarea>
                    </div>
                </div>
                 <div class="field">
                    <label class="label">date:</label>
                    <div class="control">
                        <textarea class="textarea" placeholder="when did you work hard?" v-model="workout.date"></textarea>
                    </div>
                </div>

                <div class="field">
                    <div class="control">
                        <label class="radio">
                            <input type="radio" name="question" v-model="workout.isPublic" :value="true" />
                            Public
                        </label>
                        <label class="radio">
                            <input type="radio" name="question" v-model="workout.isPublic" :value="false" />
                            Private
                        </label>
                    </div>
                </div>

            </div>
        </div>
        <footer class="card-footer">
            <button class="button is-link card-footer-item" type="submit">Submit And Share your Workout!</button>
            <button class="button is-link is-light card-footer-item" type="reset">Cancel</button>

        </footer>
    </form>
</template>

<script>
export default {
    props: {
        newWorkout: Object
    },
    data(){
        return {
            workout: this.newWorkout
        }
    },
    watch: {
        newWorkout(){
            this.workout = this.newWorkout;
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