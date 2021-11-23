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
        User: {firstName:'', lastName: '', handle:'', password:''},
        Session
       
    }),
    methods: {
       register(){
          let newUser ={
            firstName: this.User.firstName, lastName: this.User.lastName, handle: this.User.handle, password: this.User.password
          
          }
          console.log(newUser);
          this.Session.Register(newUser);
         

        }
    },
      mounted() {
   Session.CheckForSameUsers= false;
},
updated() {
   console.log(this.$route)
}
}
               

</script>

<style>
@import url(https://fonts.googleapis.com/css2?family=Playfair+Display+SC&display=swap);
@import url(https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300&display=swap);
@import url(https://fonts.googleapis.com/css2?family=Amatic+SC&family=Roboto+Condensed:wght@300&display=swap);
@import url("../assets/styles.css");
</style>