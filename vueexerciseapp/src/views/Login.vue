<template>

<div>
  <h1 v-if="Session.regConfirm" style="font-family: Garamond, serif; font-size:35px; font-weight:bold;">
      User registered successfully <br>
      please Login below!

  </h1>
 
    <section class="hero" style="background-color: lightskyblue">
        <div class="hero-body">
            <p class="title ">
                Login
                <i class="fas fa-address-book fa-2x"></i>
            </p>

            <p class="subtitle">
                Returning users, please login
            </p>
        </div>
    </section>

     <div class="container">
        <div class="column">
            <form class="section" @submit.prevent="login()">
            <div class="field">

                <label class="label">Enter Username:</label>
                <div class="control form">
                    <input class="input" name="email" type="text" placeholder="Enter username" v-model="email">
                </div>
            </div>
            <div class="field">
                <label class="label">Password</label>
                <div class="control">
                    <input class="input" name="pass" type="password" placeholder="Enter password" v-model="password">
                </div>

            </div>
            <div class="control">
                <button class="button is-link title" style="height:50px;">Login</button>
            </div>
            </form>
            
        </div>
    </div>







</div>
  
</template>

<script>
import Session from "../services/session";
export default {
    data: ()=>({
        email: null,
        password: null,
        Session,
        
         regConfirm: false,
    }),
    methods: {
        login(){
            this.Session.Login(this.email, this.password);
        }
    },

   mounted() {
   Session.regConfirm = false;
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