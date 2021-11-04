<template>
    <div class="buttons" v-if="!Session.user">
          <router-link class="navbar-item  button is-light" to="/signup" >
        Signup
      </router-link>
          <a class="button is-light" @click="login">
            Log in
          </a>
    </div>
    <div v-else class="title" style="border-style:double; font-size: 28px;">
        Hello {{name}} 
    </div>
</template>

<script>
import Session from "../services/session";
export default {
    data (){
        return ({ 
            Session
        })
    },
    methods: {
        login(){
            this.$router.push('/login');
            //this.Session.Login();
        }
    },
    computed:{
        name(){
            return this.Session.user.firstName + ' ' + this.Session.user.lastName;
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