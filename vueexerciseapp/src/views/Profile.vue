<template>
  <div class="container">
    <form class="card" @submit.prevent="addProfileData">
      <div class="card-content">
        <div class="content">
          <div class="field">
            <label class="label">Picture</label>
            <div class="control">
              <input
                class="input"
                type="url"
                placeholder="Input a URL to profile picture"
                v-model="profile.src"
              />
            </div>
          </div>

          <div class="field">
            <label class="label">Description</label>
            <div class="control">
              <textarea
                class="textarea"
                placeholder="Put your description here!"
                v-model="profile.description"
              ></textarea>
            </div>
          </div>
          <div class="field">
            <label class="label">Age</label>
            <div class="control">
              <input
                class="input"
                type="number"
                placeholder="How old are you?"
                v-model="profile.age"
              />
            </div>
          </div>
          <div class="field">
            <label class="label">Weight</label>
            <div class="control">
              <input
                class="input"
                type="number"
                placeholder="How much do you weigh?"
                v-model="profile.weight"
              />
            </div>
          </div>

          <div class="field">
            <div class="control">
              <label class="radio">
                <input
                  type="radio"
                  name="question"
                  v-model="profile.isPublic"
                  :value="true"
                />
                Public
              </label>
              <label class="radio">
                <input
                  type="radio"
                  name="question"
                  v-model="profile.isPublic"
                  :value="false"
                />
                Private
              </label>
            </div>
          </div>
        </div>
      </div>
      <footer class="card-footer">
        <button class="button is-link card-footer-item" type="submit">
          Submit
        </button>
        <button class="button is-link is-light card-footer-item" type="reset">
          Cancel
        </button>
      </footer>
    </form>

    <section id="cardContainer">
      <div class="card notification" style="background-color: beige">
        <div class="card-content">
          <div class="media-content">
            <div class="title is-4" style="size: 100px">{{ fullname }}</div>
            <p class="subtitle is-6">{{ profile.user_handle }}</p>
          </div>
        </div>

        <div class="title is-active" id="profileHeading">User Profile</div>
        <div class="card" style="border-style: double; border-width: 10px">
          <i class="fas fa-heart fa-2x fa-spin"></i>
          <i class="fas fa-swimmer fa-2x"></i>
          <i class="fas fa-running fa-2x"></i>
        </div>
      </div>
    </section>
    <br />

    <div
      class="section"
      style="border-style: ridge; border-color: burlywood; border-width: 10px"
    >
      <div class="container">
        <div class="columns">
          <div class="column notification is-success has-text-black">
            <container>
              <span style="font-size: 80px">User Image:</span>
              <br />
              <br />

              <img class="is-rounded" :src="`  ${this.profile.src} `" />
            </container>
          </div>
          <div class="column notification is-danger has-text-black">
            <span style="font-size: 80px">Age:</span>
            <br />
            <span style="font-size: 45px">{{ this.profile.age }}</span>
          </div>
          <div class="column notification is-primary has-text-black">
            <span style="font-size: 80px">Weight:</span>
            <br />
            <span style="font-size: 45px">{{ this.profile.weight }}</span>
          </div>
          <div class="column notification is-warning has-text-black">
            <span style="font-size: 80px">Description</span>
            <br />
            {{ this.profile.description }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Session from "../services/session";

export default {
  data: () => ({
    profile: { src: "", weight: "", description: "", age: "", user_handle: "" },
  }),
  methods: {
    addProfileData() {
      let newProfileData = {
        src: this.profile.src,
        weight: this.profile.weight,
        description: this.profile.description,
        user_handle: Session.user.handle
      };

      
      Session.AddProfileData(newProfileData);
    
    
    },
 
  },
    async beforeMount(){
       let newProfileData = {
        src: this.profile.src,
        weight: this.profile.weight,
        description: this.profile.description,
        user_handle: Session.user.handle
      };
        console.log(Session.AddProfileData(newProfileData));

    
 },
};
</script>

<style>
@import url(https://fonts.googleapis.com/css2?family=Playfair+Display+SC&display=swap);
@import url(https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300&display=swap);
@import url(https://fonts.googleapis.com/css2?family=Amatic+SC&family=Roboto+Condensed:wght@300&display=swap);

@import url("../assets/styles.css");
</style>