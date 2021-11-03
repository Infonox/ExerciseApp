<template>
  <div class="home">
    <section class="hero is-link">
      <div class="hero-body">
        <p class="title">
          Welcome to the Exercise Application!
          <i class="fas fa-running fa-2x fa-spin"></i>
        </p>

        <p class="subtitle">Create a profile below!</p>
      </div>
    </section>
    <br />
    <div class="columns" style="border-style:double;border-width:7px;border-color:lightgrey">
      <div class="column">
        <img
          src="../assets/workoutswim.jpeg"
          style="
            width: 225px;
            height: 225px;
            border-style: double;
            border-width: 5px;
          "
        />
      </div>
      <div class="column">
        ¨The only person you are destined to become is the person you decide to
        be.¨ – Ralph Waldo Emerson
      </div>
      <div class="column">
        <img
          src="../assets/workoutrunning.jpeg"
          style="
            width: 225px;
            height: 225px;
            border-style: double;
            border-width: 5px;
          "
        />
      </div>
      <div class="column">
        “The last three or four reps is what makes the muscle grow. This area of
        pain divides a champion from someone who is not a champion.”- Arnold
        Schwarzenegger
      </div>
      <div class="column">
        <img
          src="../assets/workoutlifting.jpeg"
          style="
            width: 225px;
            height: 225px;
            border-style: double;
            border-width: 5px;
          "
        />
      </div>
      <div class="column">
        ¨Most people fail, not because of lack of desire, but, because of lack
        of commitment.¨ – Vince Lombardi
      </div>
    </div>

    <form class="container" @submit.prevent="homePageSetup()">
      <div class="column">
        <div class="field">
          Enter some info and use (email:admin,pass:admin) for testing, profile
          page will be updated with contents of this page
          <label class="label">First Name</label>
          <div class="control">
            <input
              class="input"
              name="firstName"
              type="text"
              placeholder="Who's the new champ?"
              v-model="firstName"
            />
          </div>
          
        </div>
        <div class="field">
          <label class="label">Last Name</label>
          <div class="control">
            <input
              class="input"
              name="lastName"
              type="text"
              placeholder="Who's the new champ?"
              v-model="LastName"
            />
          </div>
          
        </div>
        <div class="field">
          <label class="label">Age</label>
          <div class="control">
            <input
              class="input"
              name="age"
              type="number"
              placeholder="Lookin' swell"
              v-model="age"
            />
          </div>
        </div>
        <div class="field">
          Enter (admin,admin) in email,pass and click submit for testing!
          <label class="label">Enter an Email address</label>
          <div class="control">
            <input
              class="input"
              name="email"
              type="text"
              placeholder="Enter your email address"
              v-model="registeremail"
            />
          </div>
        </div>
        <div class="field">
          <label class="label">Enter a password</label>
          <div class="control">
            <input
              class="input"
              name="password"
              type="text"
              placeholder="Enter a password"
              v-model="registerpass"
            />
          </div>
        </div>

        <div class="field">
          <label class="label">Weight</label>
          <div class="control">
            <input
              class="input"
              name="weight"
              type="number"
              placeholder="Doesn't define you"
              v-model="weight"
            />
          </div>
        </div>
        <div class="field">
          <label class="label">How active are you?</label>
          <div class="control">
            <div class="select">
              <select name="activity">
                <option>Very Active</option>
                <option>Not very Active</option>
                <option>What is this, "Working out"?</option>
              </select>
            </div>
          </div>
        </div>
        <div class="field">
          <label class="label"
            >Some things about yourself, hobbies/lifestyle goals, exc</label
          >
          <div class="control">
            <textarea
              class="textarea"
              name="description"
              type="text"
              placeholder="What makes you interesting?"
              v-model="description"
            ></textarea>
          </div>
        </div>
        <div class="field is-grouped">
          <div class="control">
            <button class="button is-link" @submit="homePageSetup()">
              Submit
            </button>
          </div>
          <div class="control">
            <button class="button is-link is-light">Cancel</button>
            {{ fullname }}
            {{ weight }}
            {{ age }}
            {{ description }}
          </div>
        </div>
      </div>
    </form>
  </div>
</template>


<script>
// @ is an alias to /src
import Session from "../services/session";
//import router from "../router";

export default {
  name: "Home",
  components: {},
  data: () => ({
    firstName: null,
    LastName: null,
    weight: null,
    description: null,

    age: null,
    Session,

    toRoute: "/profile",
    registeremail: null,
    registerpass: null,
  }),
  methods: {
    homePageSetup() {
      //when SUBMIT is clicked, we want to add a feature where user first enters HANDLE and PASSWORD on this page, and when submit is clicked they are automatically logged in and redirected to the profile/feed/sharing pages
      //right now when we push straight to the profile page we still have to login with admin/admin first or whatever users are in our .js

      Session.weight = this.weight;
      Session.age = this.age;
      Session.description = this.description;
      Session.fullname = this.fullname;

      this.Session.HomeRegister(this.registeremail, this.registerpass, this.weight, this.age, this.description, this.firstName, this.LastName);
    },
  },
}; //view model
</script>
<style>
@import url(https://fonts.googleapis.com/css2?family=Playfair+Display+SC&display=swap);
@import url(https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300&display=swap);
@import url(https://fonts.googleapis.com/css2?family=Amatic+SC&family=Roboto+Condensed:wght@300&display=swap);
@import url("../assets/styles.css");
</style>
