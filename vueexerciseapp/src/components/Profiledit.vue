<template>
    <form class="card" @submit.prevent="$emit('add')">
        <div class="card-content">
            <div class="content">
                <div class="field">
                    <label class="label">Picture</label>
                    <div class="control">
                        <input class="input" type="url" placeholder="Input a URL to profile picture" v-model="profile.src" />
                    </div>
                </div>
                

                <div class="field">
                    <label class="label">Description</label>
                    <div class="control">
                        <textarea class="textarea" placeholder="Put your description here!" v-model="profile.description"></textarea>
                    </div>
                </div>
                <div class="field">
                    <label class="label">Age</label>
                    <div class="control">
                        <input class="input" type="number" placeholder="How old are you?" v-model="profile.age"/>
                    </div>
                </div>
                <div class="field">
                    <label class="label">Weight</label>
                    <div class="control">
                        <input class="input" type="number" placeholder="How much do you weigh?" v-model="profile.weight"/>
                    </div>
                </div>

                <div class="field">
                    <div class="control">
                        <label class="radio">
                            <input type="radio" name="question" v-model="profile.isPublic" :value="true" />
                            Public
                        </label>
                        <label class="radio">
                            <input type="radio" name="question" v-model="profile.isPublic" :value="false" />
                            Private
                        </label>
                    </div>
                </div>

            </div>
        </div>
        <footer class="card-footer">
            <button class="button is-link card-footer-item" type="submit">Submit</button>
            <button class="button is-link is-light card-footer-item" type="reset">Cancel</button>

        </footer>
    </form>
</template>

<script>
export default {
    props: {
        newProfileData: Object
    },
    data(){
        return {
            profile: this.newProfileData
        }
    },
    watch: {
        newPost(){
            this.profile = this.newProfileData;
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