<template>
  <div>
    <section class="hero" style="background-color: rgb(163, 130, 230)">
      <div class="hero-body">
        <p class="title">
          Register
          <i class="fas fa-address-card fa-2x"></i>
        </p>

        <p class="subtitle">Please create an account!</p>
      </div>
    </section>
    <br />

    <form class="container"  @submit.prevent="register()">
      <div class="column">
        <div class="field">
          <label class="label">Email Address:</label>
          <div class="control">
            <input
              class="input"
              name="email"
              type="email"
              placeholder="Enter An Email Address"
              v-model="email"
              required
            />
          </div>

        </div>
        <div class="field">
          <label class="label">First Name</label>
          <div class="control">
            <input
              class="input"
              name="firstName"
              type="text"
              placeholder="Enter First Name"
              v-model="User.firstName"
              required
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
              placeholder="Enter First Name"
              v-model="User.lastName"
            />
          </div>
        </div>
        <div class="field">
          <label class="label">Username</label>
          <div class="control">
            <input
              class="input"
              name="handle"
              type="text"
              placeholder="Enter a username"
              v-model="User.handle"
            />
          </div>
        </div>
        <div class="field">
          <label class="label">Password</label>
          <div class="control">
            <input
              class="input"
              name="password"
              type="password"
              placeholder="Enter a password"
              v-model="User.password"
            />
          </div>
        </div>
         </div>
           <div v-if="Session.CheckForSameUsers" style="font-family: Garamond, serif; font-size:35px; font-weight:bold;">
      {{Session.NoSameUsers}}
      <hr>
      <div>Create a profile below!</div><br>
  </div>
   <div class="field">
          <label class="label">Picture</label>
          <div class="control">
            <input
              class="input"
              name="picture"
              type="url"
              placeholder="Enter a web url for a picture!"
              v-model="ProfileData.picture"
            />
          </div>
        </div>
         <div class="field">
          <label class="label">Description</label>
          <div class="control">
            <input
              class="input"
              name="description"
              type="text"
              placeholder="Enter a description for your profile!"
              v-model="ProfileData.description"
            />
          </div>
        </div>
        <div class="field">
          <label class="label">Age</label>
          <div class="control">
            <input
              class="input"
              name="age"
              type="text"
              placeholder="Enter your age!"
              v-model="ProfileData.age"
            />
          </div>
        </div>
          <div class="field">
          <label class="label">Weight</label>
          <div class="control">
            <input
              class="input"
              name="weight"
              type="text"
              placeholder="Enter your weight"
              v-model="ProfileData.weight"
            />
          </div>
        </div>
        <div class="control">
          <button class="button is-link title" style="height: 50px" action="submit">
            Create Account
          </button>
        </div>
       
    </form>
 
</div>
</template>

<script>



import Session from "../services/session"


export default {
    data: ()=>({
        User: {firstName:'', lastName: '', handle:'', password:'', isAdmin:'', emails:[], following:[]},
        email:'',
        Session,
        ProfileData: {user_handle:'',picture:'', description:'', age:'', weight:''}
       
    }),
    methods: {
       register(){
         this.User.emails.push(this.email);
         this.User.following.push({handle:'@bodybuilder', isApproved: true }, { handle: '@boxer', isApproved: true },{ handle: '@HenryM', isApproved: true });
          let newUser ={
            firstName: this.User.firstName, lastName: this.User.lastName, handle: this.User.handle, password: this.User.password, isAdmin: false, emails: this.User.emails, following: this.User.following
          
          }
          let profile = {
            user_handle: this.User.handle, picture: this.ProfileData.picture, description:this.ProfileData.description, age: this.ProfileData.age, weight: this.ProfileData.weight
          }
          console.log(newUser);
          console.log(profile);
          this.Session.Register(newUser);
          this.Session.AddNewProfile(profile);
         

        }
    },
      mounted() {
   Session.CheckForSameUsers= false;
},

}
               

</script>

<style>
@import url(https://fonts.googleapis.com/css2?family=Playfair+Display+SC&display=swap);
@import url(https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300&display=swap);
@import url(https://fonts.googleapis.com/css2?family=Amatic+SC&family=Roboto+Condensed:wght@300&display=swap);
@import url("../assets/styles.css");
</style>